
import apiClient from '../../infrastructure/api/ApiClient'; 
import Skill from '../models/Skill'; 

class SkillService {
    constructor() {
        this.skills = []; 
    }
    async fetchSkills() {
        try {
            const response = await apiClient.get('/skills');
            this.skills = response.data.map(skill => new Skill(skill.id, skill.name,skill.description));
            return this.skills;
        } catch (error) {
            console.error('Erreur lors de la récupération des compétences:', error);
            throw error;
        }
    }
    async createSkill(name, description) {
        try {
            const response = await apiClient.post('/skills', {
                name, 
                description
            });
            const newSkill = new Skill(response.data.name,response.data.description);
            this.skills.push(newSkill);
            return newSkill;
        } catch (error) {
            console.error('Erreur lors de la création de la compétence:', error);
            throw error; 
        }
    }
}
export default new SkillService();

