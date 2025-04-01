import apiClient from '@/api/apiClient'; 

export default {
    getSectors() {
        return apiClient.get('/sectors'); 
    },
    getSectorById(id) {
        return apiClient.get(`/sectors/${id}`);
    },
    createSector(sectorData) {
        return apiClient.post('/sectors', sectorData);
    },
    updateSector(id, sectorData) {
        return apiClient.put(`/sectors/${id}`, sectorData);
    },
    deleteSector(id) {
        return apiClient.delete(`/sectors/${id}`);
    }
};

