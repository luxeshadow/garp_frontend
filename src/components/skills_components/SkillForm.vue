
<template>
    <div class="competence-management-container">
        <form @submit="onSubmit" class="competence-form">
            <div class="form-grid">
                <div class="form-column">
                    <label class="form-label-wrapper">
                        <p class="form-label">Nom de la Compétence</p>
                        <input v-model="name" v-bind="nameAttrs" class="form-input" type="text"
                            placeholder="Entrer le nom de la compétence" autocomplete="off">
                        <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
                    </label>

                    <label class="form-label-wrapper">
                        <p class="form-label">Description de la Compétence</p>
                        <textarea v-model="description" v-bind="descriptionAttrs" class="form-input"
                            placeholder="Entrer la description de la compétence" autocomplete="off"></textarea>
                        <div v-if="errors.description" class="error-message">{{ errors.description }}</div>
                    </label>
                </div>
            </div>

            <button type="submit" class="form-btn">Ajouter Compétence</button>
        </form>
    </div>
</template>

<script setup>

import '@/assets/styles/skill.css'; 

import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import SkillService from '../../domain/services/SkillService';

// Schéma de validation Yup
const schema = yup.object({
    name: yup.string().required('Le nom est obligatoire').min(3, 'Minimum 3 caractères'),
    description: yup.string().optional().max(255, 'Maximum 255 caractères')
});

// Initialisation du formulaire
const { handleSubmit, errors } = useForm({ validationSchema: schema });

const { value: name, attrs: nameAttrs } = useField('name');
const { value: description, attrs: descriptionAttrs } = useField('description');

const onSubmit = handleSubmit(async (values, { resetForm }) => {
    try {
        await SkillService.createSkill(values.name, values.description);
        console.log('Compétence ajoutée avec succès');
        resetForm();
    } catch (error) {
        console.error('Erreur lors de l’ajout de la compétence');
    }
});
</script>

