import authApi from '@/infrastructure/api/authApi';
import User from '@/domain/models/User';

class AuthService {
    async login(email, password) {
        const response = await authApi.login({ email, password });
        const userData = response.data;
        const user = new User(userData.id, userData.fullName, userData.email, userData.token);
        localStorage.setItem('token', user.token);

        return user;
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}

export default new AuthService();
