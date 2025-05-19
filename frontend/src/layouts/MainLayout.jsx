import Navbar from '../components/navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
