const TOKEN_KEY = "token";

export const TokenService = {
  getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY) || "";
    }
  },
  saveToken(accessToken: string) {
    if (typeof window !== "undefined") {
      return localStorage.setItem(TOKEN_KEY, accessToken);
    }
  },
  removeToken() {
    if (typeof window !== "undefined") {
      return localStorage.removeItem(TOKEN_KEY);
    }
  },
};
