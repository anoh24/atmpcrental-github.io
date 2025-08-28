import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); 
  return token ? <Navigate to="/customerAdminAccount/customerAdminDashboardView/customerAdminMainDashboardpage" /> : children;
};
