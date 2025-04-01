<template>
  <div class="employee-management-container">
    <div class="employee-form">
      <form @submit.prevent="submitForm">
        <div class="form-grid">
          <div class="form-column">
            <div class="form-label-wrapper">
              <label for="fullName">Nom complet</label>
              <input id="fullName" v-model="formData.fullName" type="text" placeholder="Nom complet" class="form-input" :class="{ 'input-error': errors.fullName }" />
              <span v-if="errors.fullName" class="error-message">{{ errors.fullName }}</span>
            </div>

            <div class="form-label-wrapper">
              <label for="email">Email</label>
              <input id="email" v-model="formData.email" type="email" placeholder="Email" class="form-input" :class="{ 'input-error': errors.email }" />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-label-wrapper">
              <label for="phone">Téléphone</label>
              <input id="phone" v-model="formData.phone" type="text" placeholder="Téléphone" class="form-input" :class="{ 'input-error': errors.phone }" />
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
          </div>

          <div class="form-column">
            <div class="form-label-wrapper">
              <label>Secteurs d'activité</label>
              <div class="select-container">
                <div class="select-grid">
                  <div v-for="sector in sectors" :key="sector.id" class="select-box" :class="{ selected: selectedSectors.includes(sector.id) }" @click="toggleSector(sector.id)">
                    {{ sector.name }}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-label-wrapper">
              <label>Compétences</label>
              <div class="select-container">
                <div class="select-grid">
                  <div v-for="skill in skills" :key="skill.id" class="select-box" :class="{ selected: selectedSkills.includes(skill.id) }" @click="toggleSkill(skill.id)">
                    {{ skill.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="justify-content: flex-start;" class="profile-pic-wrapper">
          <label class="profile-pic-label" for="file-input">Photo</label>
          <div class="image-upload-container">
            <label id="upload-image-label" for="file-input">
              <p v-if="!imagePreview">+</p>
              <img v-if="imagePreview" :src="imagePreview" alt="Aperçu de la photo" id="image-preview" />
            </label>
            <input type="file" id="file-input" class="upload-input" @change="handleImageUpload" />
          </div>
        </div>

        <button type="submit" class="form-btn">Ajouter</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/EmployeeForm.css'; 
import { ref, reactive, onMounted } from 'vue'
import EmployeeService from '@/domain/services/EmployeeService'
import SectorService from '@/domain/services/SectorService'
import SkillService from '@/domain/services/SkillService'
import { validateEmployee } from '@/domain/validations/employeeValidation'

const formData = reactive({
  fullName: '',
  phone: '',
  email: ''
})

const imagePreview = ref(null)
const sectors = ref([])
const skills = ref([])
const selectedSectors = ref([])
const selectedSkills = ref([])
const errors = reactive({})

onMounted(async () => {
  try {
    const sectorResponse = await SectorService.getAllSectors()
    sectors.value = sectorResponse.data

    const skillResponse = await SkillService.getAllSkills()
    skills.value = skillResponse.data
  } catch (error) {
    console.error('Erreur lors du chargement des secteurs et compétences:', error)
  }
})

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}


const submitForm = async () => {
  Object.keys(errors).forEach(key => delete errors[key]) // Réinitialisation
  Object.assign(errors, validateEmployee(formData)) // Validation

  if (Object.keys(errors).length === 0) {
    try {
      const newEmployee = await EmployeeService.createEmployee(
        formData.fullName,
        formData.email,
        formData.phone,
        imagePreview.value,
        selectedSectors.value,
        selectedSkills.value
      );

      console.log('Employé ajouté avec succès:', newEmployee);
      formData.fullName = ''
      formData.phone = ''
      formData.email = ''
      selectedSectors.value = []
      selectedSkills.value = []
      imagePreview.value = null
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'employé:", error);
    }
  }
}



</script>


