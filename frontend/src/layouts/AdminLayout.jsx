import Sidebar from '../components/NavbarAdmin';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
