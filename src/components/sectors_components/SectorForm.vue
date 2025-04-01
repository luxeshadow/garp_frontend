<template>
    <div class="sector-management-container">
        <form @submit.prevent="submitForm" class="sector-form">
            <div class="form-grid">
                <div class="form-column">
                    <label class="form-label-wrapper">
                        <p class="form-label">Nom du Secteur</p>
                        <input v-model="formData.sectorName" @blur="validatesectorName"
                            :class="{ 'input-error': errors.sectorName }" class="form-input" type="text"
                            placeholder="Entrer nom compétence" autocomplete="off">
                        <div v-if="errors.sectorName" class="error-message">{{ errors.sectorName }}</div>
                    </label>

                    <label class="form-label-wrapper">
                        <p class="form-label">Description</p>
                        <textarea v-model="formData.description" @blur="validateDescription"
                            :class="{ 'input-error': errors.description }" class="form-input"
                            placeholder="Entrer description de la compétence" autocomplete="off"></textarea>
                        <div v-if="errors.description" class="error-message">{{ errors.description }}</div>
                    </label>
                </div>
            </div>

            <button type="submit" class="form-btn">
                Ajouter Compétence
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Reactive state for form data
const formData = reactive({
    sectorName: '',
    description: '',
})

// Reactive state for errors
const errors = reactive({
    sectorName: '',
    description: '',
})

// Validation functions
const validatesectorName = () => {
    if (!formData.sectorName.trim()) {
        errors.sectorName = 'Le nom de la compétence est requis'
    } else if (formData.sectorName.trim().length < 2) {
        errors.sectorName = 'Le nom doit contenir au moins 2 caractères'
    } else {
        errors.sectorName = ''
    }
}

const validateDescription = () => {
    if (!formData.description.trim()) {
        errors.description = 'La description est requise'
    } else if (formData.description.trim().length < 10) {
        errors.description = 'La description doit contenir au moins 10 caractères'
    } else {
        errors.description = ''
    }
}

// Form submission
const submitForm = () => {
    // Validate all fields
    validatesectorName()
    validateDescription()

    // Check if there are any errors
    if (errors.sectorName || errors.description) {
        return
    }

    // Prepare form data for submission
    const submissionData = { ...formData }

    // TODO: Implement actual form submission
    console.log('Form submitted:', submissionData)

    // Reset form after submission
    formData.sectorName = ''
    formData.description = ''
}
</script>

<style scoped>
.sector-management-container {
    background-color: #ffffff;
    padding: 20px;
}

.sector-form {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr;
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
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
}

.form-btn:hover {
    background-color: #003366;
}
</style>