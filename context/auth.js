import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: "",
    token: "",
    role: "",
    user_type: "",
    id: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        email: parseData.email,
        token: parseData.token,
        role: parseData.role,
        user_type: parseData.user_type,
        id: parseData.id,
      });
    }
  }, []);
 
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };