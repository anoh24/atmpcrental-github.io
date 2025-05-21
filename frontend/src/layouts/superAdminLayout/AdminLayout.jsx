// AdminLayout.jsx
import { useState } from 'react';
import Sidebar from '../../components/superAdminBar/NavbarAdmin'; // Sidebar
import Topbar from '../../components/superAdminBar/topBarAdmin'; // Topbar

const AdminLayout = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <Topbar
        isBurgerOpen={isBurgerOpen}
        onBurgerClick={() => setIsBurgerOpen(!isBurgerOpen)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isBurgerOpen={isBurgerOpen} />

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
