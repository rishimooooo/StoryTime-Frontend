import apiClient from './axiosInstance';

interface LoginResponse {
    token: string;
}

export const login = async (username: string, password: string): Promise<void> => {
    try {
        const response = await apiClient.post<LoginResponse>('/auth/login', { username, password });
        const { token } = response.data;
        localStorage.setItem('authToken', token);
    } catch (error) {
        console.error('Login failed', error);
        throw error;
    }
};