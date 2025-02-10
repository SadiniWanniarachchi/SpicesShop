import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Make sure Home is correctly imported

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar should be outside the Routes so it appears on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
