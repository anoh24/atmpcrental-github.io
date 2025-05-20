import Sidebar from '../components/NavbarAdmin';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="flex-1 bg-gray-100">{children}</main>
    </>
  );
};

export default AdminLayout;
