import { Navigate } from "react-router-dom";

export const PrivateRoute =({childer}) =>{
    const token =localStorage.getItem("token");
    return token ? childer: <Navigate to="/loginpage"/>;
}
