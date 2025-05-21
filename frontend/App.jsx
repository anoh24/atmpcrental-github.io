import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/customerMainLayout/MainLayout';
import AdminLayout from './layouts/superAdminLayout/AdminLayout';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/LoginRegisterClient/loginPage';
import RegisterPage from './pages/LoginRegisterClient/registerPage';
import DashboardMainPage from './pages/superAdmin/dashboardMainPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route
          path="/loginpage"
          element={
            <MainLayout>
              <Loginpage />
            </MainLayout>
          }
        />
        <Route
          path="/registerpage"
          element={
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/superAdmin/dashboardMainPage"
          element={
            <AdminLayout>
              <DashboardMainPage />
            </AdminLayout>
          }
        />
        {/* Admin Branch Account Registering */}
         <Route
          path="/superAdmin/"
          element={
            <AdminLayout>
              <DashboardMainPage />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
