import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/home/homepage';
import Loginpage from './pages/LoginRegisterClient/loginPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;
