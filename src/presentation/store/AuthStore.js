import { defineStore } from 'pinia';
import AuthService from '@/domain/services/AuthService';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: !!localStorage.getItem('token')
    }),
    actions: {
        async login(email, password) {
            this.user = await AuthService.login(email, password);
            this.isAuthenticated = true;
        },
        logout() {
            AuthService.logout();
            this.user = null;
            this.isAuthenticated = false;
        }
    }
});
