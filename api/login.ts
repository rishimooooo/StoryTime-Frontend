import apiClient from "./axiosInstance";

interface LoginResponse {
  token: string;
}

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const requestBody = { email, password };

    // 🛑 Log the request payload
    console.log("📤 Sending Login Data:", requestBody);

    const response = await apiClient.post<LoginResponse>(
      "/api/users/login", // ✅ Corrected endpoint
      requestBody,
      {
        headers: { "Content-Type": "application/json" }, // Ensure JSON headers
      }
    );

    const { token } = response.data;
    localStorage.setItem("authToken", token);
  } catch (error) {
    console.error("❌ Login failed", error.response?.data || error.message);
    throw error;
  }
};
