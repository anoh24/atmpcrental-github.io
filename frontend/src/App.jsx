import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Rooms from './pages/Rooms';
// import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // children: [
    //   { index: true, element: <Home /> }
    //   // { path: 'AboutUs', element: <AboutUs /> },
    //   // { path: 'Contact', element: <Contact /> },
    //   // { path: '', element: <LoginRegister /> },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
