import apiClient from './axiosInstance';

interface SignUpResponse {
    token: string;
}

export const signup = async (name: string, email: string, password: string, profilePicture: File | null): Promise<void> => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (profilePicture) {
        formData.append('profilePicture', profilePicture);
    }

    try {
        const response = await apiClient.post<SignUpResponse>('/auth/signup', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        const { token } = response.data;
        localStorage.setItem('authToken', token);
    } catch (error) {
        console.error('Sign-up failed', error);
        throw error;
    }
};