import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
     

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>

    </BrowserRouter>


  );
};

export default App;
