const tokenName = "token";

// Mock data for demonstration
const mockUserData = {
    email: "user@example.com",
    password: "password123",
    token: "mockToken123" // Simulated JWT token
};

export function logout() {
    localStorage.removeItem(tokenName); // Remove token from local storage
}

export function getJwt() {
    return localStorage.getItem(tokenName); // Retrieve token from local storage
}
