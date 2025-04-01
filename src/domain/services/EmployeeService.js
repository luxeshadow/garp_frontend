import employeeApi from '@/infrastructure/api/EmployeeApi';

class EmployeeService {
    async createEmployee(full_name, email, phone, photo, sectorIds, skillIds) {
        const employeeData = {
            full_name,
            email,
            phone,
            photo,
            sectors: sectorIds,
            skills: skillIds
        };

        try {
            const response = await employeeApi.createEmployee(employeeData);
            return response.data; 
        } catch (error) {
            console.error("Erreur lors de la création de l'employé:", error);
            throw error;
        }
    }
}

export default new EmployeeService();
