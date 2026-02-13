import { createContext, useContext, useEffect, useState } from "react";
import type { UserProfile } from "../../types/user";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API;
const ENDPOINT = API + "/api/v1/auth";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<String | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = window.localStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    }
  }, []);

  /** Get access token from API */
  async function login(credentials: { email: string; password: string }) {
    const response = await fetch(ENDPOINT + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();

    if (!response.ok) {
      throw Error(result.message);
    }

    setToken(result.access_token);
    window.localStorage.setItem("access_token", result.access_token);
  }

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("access_token");
    navigate("/");
  };

  /** Get profile details from API */
  async function getProfile() {
    const response = await fetch(ENDPOINT + "/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();

    if (!response.ok) {
      throw Error(result.message);
    }

    const profile: UserProfile = result;

    return profile;
  }

  const value = { token, login, logout, getProfile };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
