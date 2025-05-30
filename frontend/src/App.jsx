import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layout section
import MainLayout from './layouts/customerMainLayout/MainLayout';
import BranchAdminLayout from './layouts/branchAdminLayout/branchAdminLayout';
import CustomerAdminAccountNavbarLayout from './layouts/customerAdminAccountLayout/customerAdminAccountLayout';
//client side section
import Homepage from './pages/home/homepage';
import Loginpage from './pages/LoginRegisterClient/loginPage';
import RegisterPage from './pages/LoginRegisterClient/registerPage';
//branch admin side section
import BranchAdminDashboardPage from './pages/branchAdmin/branchAdminDashboardView/branchAdminDashboardPage';
import BranchAdminDashboardTenantViewPage from './pages/branchAdmin/branchAdminTenantView/tenantViewPage'
import BranchAdminRoomViewPage from './pages/branchAdmin/branchAdminRoomView/branchAdminRoomViewPage';
import BranchAdminBillingViewPage from './pages/branchAdmin/branchAdminBillingView/branchAdminBillingViewPage'
import BranchAdminNotificationViewPage from './pages/branchAdmin/branchAdminNotificationView/branchAdminNotificationViewPage'
//customer admin account section
import CustomerAdminMainDashboardPage from './pages/customerAdminAccount/customerAdminDashboardView/customerAdminMainDashboardPage';
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

        {/* Branch admin dashbnoard */}
        <Route
         path="/branchAdmin/branchAdminDashboardView/branchAdminDashboardPage"
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

         <Route
         path="/branchAdmin/branchAdminNotificationView/branchAdminNotificationViewPage"
         element={
          <BranchAdminLayout>
          < BranchAdminNotificationViewPage/>
          </BranchAdminLayout>
         }
        >

        </Route>

        {/* customer admin dashboard */}
        <Route
          path="/customerAdminAccount/customerAdminDashboardView/customerAdminMainDashboardPage"
          element={
            <CustomerAdminAccountNavbarLayout>
              <CustomerAdminMainDashboardPage/>
            </CustomerAdminAccountNavbarLayout>

          }
          >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
