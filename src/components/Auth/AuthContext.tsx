import { createContext, useContext, useEffect, useState } from "react";

const API = import.meta.env.VITE_API;
const ENDPOINT = API + "/api/v1/auth";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<String | null>(null);

  useEffect(() => {
    const access_token = window.sessionStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    }
  }, []);

  /** Get login token from API */
  async function login(credentials: { email: string; password: string }) {
    const response = await fetch(ENDPOINT + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result: { access_token: string; refresh_token: string } =
      await response.json();

    if (!response.ok) {
      throw Error("Unknown login error occured");
    }

    setToken(result.access_token);
    window.sessionStorage.setItem("access_token", result.access_token);
  }

  const logout = () => {
    setToken(null);
    window.sessionStorage.removeItem("access_token");
  };

  const value = { token, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
