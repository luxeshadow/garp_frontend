import apiClient from '@/api/apiClient'; 

export default {
    getSkills() {
        return apiClient.get('/skills'); 
    },
    getSkillById(id) {
        return apiClient.get(`/skills/${id}`);
    },
    createSkill(skillData) {
        return apiClient.post('/skills', skillData);
    },
    updateSkill(id, skillData) {
        return apiClient.put(`/skills/${id}`, skillData);
    },
    deleteSkill(id) {
        return apiClient.delete(`/skills/${id}`);
    }
};

