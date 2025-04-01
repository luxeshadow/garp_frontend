import apiClient from '@/api/apiClient';

export default {
    login(credentials) {
        return apiClient.post('/login', credentials);
    },
    logout() {
        return apiClient.post('/logout');
    },
    getUserProfile() {
        return apiClient.get('/profile');
    }
};
