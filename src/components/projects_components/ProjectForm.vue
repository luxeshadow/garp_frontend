<template>
    <div class="project-management-container">
      <form @submit.prevent="submitForm" class="project-form">
        <div class="form-grid">
          <div class="form-column">
            <label class="form-label-wrapper">
              <p class="form-label">Nom du Projet</p>
              <input 
                v-model="formData.projectName" 
                @blur="validateProjectName"
                :class="{'input-error': errors.projectName}"
                class="form-input" 
                type="text"
                placeholder="Entrer le nom du projet" 
                autocomplete="off"
              >
              <div v-if="errors.projectName" class="error-message">{{ errors.projectName }}</div>
            </label>
  
            <label class="form-label-wrapper">
              <p class="form-label">Email du Client</p>
              <input 
                v-model="formData.clientEmail"
                @blur="validateClientEmail"
                :class="{'input-error': errors.clientEmail}"
                class="form-input" 
                type="email" 
                placeholder="Entrer l'email du client"
                autocomplete="off"
              >
              <div v-if="errors.clientEmail" class="error-message">{{ errors.clientEmail }}</div>
            </label>
  
            <label class="form-label-wrapper">
              <p class="form-label">Adresse du Client</p>
              <input 
                v-model="formData.clientAddress"
                @blur="validateClientAddress"
                :class="{'input-error': errors.clientAddress}"
                class="form-input" 
                placeholder="Entrer l'adresse du client"
                autocomplete="off"
              >
              <div v-if="errors.clientAddress" class="error-message">{{ errors.clientAddress }}</div>
            </label>
            
            <label class="form-labels-wrapper">
              <p class="form-label">Type de Projet</p>
              <select v-model="formData.projectType" @blur="validateProjectType" :class="{'input-error': errors.projectType}" class="form-input">
                <option disabled value="">Sélectionner le type de projet</option>
                <option v-for="type in projectTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
              </select>
              <div v-if="errors.projectType" class="error-message">{{ errors.projectType }}</div>
            </label>
          </div>
  
          <div class="form-column">
            <label class="form-label-wrapper">
              <p class="form-label">Téléphone du Client</p>
              <input 
                v-model="formData.clientPhone"
                @blur="validateClientPhone"
                :class="{'input-error': errors.clientPhone}"
                class="form-input" 
                placeholder="Entrer le téléphone du client" 
                autocomplete="off"
              >
              <div v-if="errors.clientPhone" class="error-message">{{ errors.clientPhone }}</div>
            </label>
  
            <label class="form-label-wrapper">
              <p class="form-label">Description du Projet</p>
              <textarea 
                v-model="formData.projectDescription"
                @blur="validateProjectDescription"
                :class="{'input-error': errors.projectDescription}"
                class="form-input" 
                placeholder="Décrire le projet"
                rows="5"
              ></textarea>
              <div v-if="errors.projectDescription" class="error-message">{{ errors.projectDescription }}</div>
            </label>
   
          </div> 
        </div>
          <br>
        <button 
          type="submit" 
          class="form-btn"
        >
          Ajouter Projet
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  // Reactive state for form data
  const formData = reactive({
    projectName: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    projectType: '',
    projectDescription: '',
  })
  
  // Reactive state for errors
  const errors = reactive({
    projectName: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    projectType: '',
    projectDescription: '',
  })
  
  // Image preview
  const imagePreview = ref(null)
  
  // Project types
  const projectTypes = ref([
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile Development' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Consulting' },
    { id: 5, name: 'Marketing' },
  ])
  
  // Validation functions
  const validateProjectName = () => {
    if (!formData.projectName.trim()) {
      errors.projectName = 'Le nom du projet est requis'
    } else {
      errors.projectName = ''
    }
  }
  
  const validateClientPhone = () => {
    const phoneRegex = /^[0-9]{10}$/
    if (!formData.clientPhone.trim()) {
      errors.clientPhone = 'Le téléphone est requis'
    } else if (!phoneRegex.test(formData.clientPhone.replace(/\s+/g, ''))) {
      errors.clientPhone = 'Numéro de téléphone invalide (10 chiffres)'
    } else {
      errors.clientPhone = ''
    }
  }
  
  const validateClientEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.clientEmail.trim()) {
      errors.clientEmail = 'L\'email est requis'
    } else if (!emailRegex.test(formData.clientEmail)) {
      errors.clientEmail = 'Adresse email invalide'
    } else {
      errors.clientEmail = ''
    }
  }
  
  const validateClientAddress = () => {
    if (!formData.clientAddress.trim()) {
      errors.clientAddress = 'L\'adresse du client est requise'
    } else {
      errors.clientAddress = ''
    }
  }
  
  const validateProjectType = () => {
    if (!formData.projectType) {
      errors.projectType = 'Le type de projet est requis'
    } else {
      errors.projectType = ''
    }
  }
  
  const validateProjectDescription = () => {
    if (!formData.projectDescription.trim()) {
      errors.projectDescription = 'La description du projet est requise'
    } else {
      errors.projectDescription = ''
    }
  }
  
  // Image upload handler
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
  
  // Form submission
  const submitForm = () => {
    // Validate all fields
    validateProjectName()
    validateClientPhone()
    validateClientEmail()
    validateClientAddress()
    validateProjectType()
    validateProjectDescription()
  
    // Check if there are any errors
    if (errors.projectName || errors.clientPhone || errors.clientEmail || errors.clientAddress || errors.projectType || errors.projectDescription) {
      return
    }
  
    // Prepare form data for submission
    const submissionData = {
      ...formData,
      projectImage: imagePreview.value
    }
  
    // TODO: Implement actual form submission
    console.log('Form submitted:', submissionData)
    
    // Reset form after submission
    formData.projectName = ''
    formData.clientPhone = ''
    formData.clientEmail = ''
    formData.clientAddress = ''
    formData.projectType = ''
    formData.projectDescription = ''
    imagePreview.value = null
  }
  </script>
  
  <style scoped>
  .project-management-container {
    background-color: #ffffff;
    padding: 20px;
  }
  
  .project-form {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  .form-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-label-wrapper {
    width: 100%;
  }
  .form-labels-wrapper {
    width: 103%;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  .input-error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 0.8em;
    margin-top: 5px;
  }
  
 
  
  .form-btn {
    width: 100%;
    padding: 12px;
    background-color: #002147;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-btn:hover {
    background-color: #003366;
  }
  </style>
  