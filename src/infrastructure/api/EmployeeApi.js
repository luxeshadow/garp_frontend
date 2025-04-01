import apiClient from '@/api/apiClient'; 

export default {
    getEmployees() {
        return apiClient.get('/employees'); 
    },
    getEmployeeById(id) {
        return apiClient.get(`/employees/${id}`);
    },
    createEmployee(employeeData) {
        return apiClient.post('/employees', employeeData);
    },
    updateEmployee(id, employeeData) {
        return apiClient.put(`/employees/${id}`, employeeData);
    },
    deleteEmployee(id) {
        return apiClient.delete(`/employees/${id}`);
    }
};
