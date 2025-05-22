import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/customerMainLayout/MainLayout';
import AdminLayout from './layouts/superAdminLayout/AdminLayout';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/LoginRegisterClient/loginPage';
import RegisterPage from './pages/LoginRegisterClient/registerPage';
import DashboardMainPage from './pages/superAdmin/dashboardMain/dashboardMainPage';
import RegisterBranchAdminAccountPage from './pages/superAdmin/dashboardBranchAdminAccounts/registerBranchAdminPage';
import ListBranchAdminAccountPage from './pages/superAdmin/dashboardBranchAdminAccountList/listBranchAdminAccountPage';
import BranchAdminLayout from './layouts/branchAdminLayout/branchAdminLayout';
import BranchAdminDashboardPage from './pages/branchAdmin/branchAdminDashboardPage';
import BranchAdminDashboardTenantViewPage from './pages/branchAdmin/branchAdminTenantView/tenantViewPage'
import BranchAdminRoomViewPage from './pages/branchAdmin/branchAdminRoomView/branchAdminRoomViewPage';
import BranchAdminBillingViewPage from './pages/branchAdmin/branchAdminBillingView/branchAdminBillingViewPage'
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

        {/* Admin dashboard */}
        <Route
          path="/superAdmin/dashboardMain/dashboardMainPage"
          element={
            <AdminLayout>
              <DashboardMainPage />
            </AdminLayout>
          }
        />
        {/* Account regist branch admin */}
           <Route
          path="/superAdmin/dashboardBranchAdminAccounts/registerBranchAdminPage"
          element={
            <AdminLayout>
              <RegisterBranchAdminAccountPage />
            </AdminLayout>
          }
        />
         {/* Account list branch admin */}
           <Route
          path="/superAdmin/dashboardBranchAdminAccountList/listBranchAdminAccountPage"
          element={
            <AdminLayout>
              <ListBranchAdminAccountPage />
            </AdminLayout>
          }
        />
        {/* Branch admin dashbnoard */}
        <Route
         path="/branchAdmin/branchAdminDashboardPage"
         element={
          <BranchAdminLayout>
          <BranchAdminDashboardPage/>
          </BranchAdminLayout>
         }
        >
        </Route>

         <Route
         path="/branchAdmin/branchAdminTenantView/tenantViewPage"
         element={
          <BranchAdminLayout>
          <BranchAdminDashboardTenantViewPage/>
          </BranchAdminLayout>
         }
        >

        </Route>
          <Route
         path="/branchAdmin/branchAdminRoomView/branchAdminRoomViewPage"
         element={
          <BranchAdminLayout>
          <BranchAdminRoomViewPage/>
          </BranchAdminLayout>
         }
        >

        </Route>

        <Route
         path="/branchAdmin/branchAdminBillingView/branchAdminBillingViewPage"
         element={
          <BranchAdminLayout>
          <BranchAdminBillingViewPage/>
          </BranchAdminLayout>
         }
        >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
