import Navbar from '../components/navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-10">{children}</main>
    </>
  );
};

export default MainLayout;
