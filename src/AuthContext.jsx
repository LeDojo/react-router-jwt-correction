import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const login = async (email, password) => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    setLoading(false);

    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } else {
      console.log(data);
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, loading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
