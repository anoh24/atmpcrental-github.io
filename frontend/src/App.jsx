import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Homepage from './pages/home/homepage';
import Loginpage from './pages/LoginRegisterClient/loginPage';
import RegisterPage from './pages/LoginRegisterClient/registerPage';
import DashboardMainPage from './pages/admin/dashboardMainPage';

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
          path="/admin/dashboardMainPage"
          element={
            <AdminLayout>
              <DashboardMainPage />
            </AdminLayout>
          }
        />
        {/* Add more admin routes here */}
      </Routes>
    </Router>
  );
}

export default App;
