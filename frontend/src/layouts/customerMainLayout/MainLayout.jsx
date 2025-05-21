import Navbar from '../../components/customerBar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-10">{children}</main>
    </>
  );
};

export default MainLayout;
