import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/home/homepage';
// import About from './pages/About';
// import Rooms from './pages/Rooms';
// import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage/> }
      // { path: 'AboutUs', element: <AboutUs /> },
      // { path: 'Contact', element: <Contact /> },
      // { path: '', element: <LoginRegister /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
