import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement"; // Add SystemUser component
import InventoryManagement from "./pages/InventoryManagement"; // Add Inventory component
import QualityManagement from "./pages/QualityManagement"; // Add QA component
import SalesManagement from "./pages/SalesManagement"; // Add Sales component
import Help from "./pages/Help"; // Add Help component
import ProductManagement from "./pages/ProductManagement"; // Add Product component
import EmployeeManagement from "./pages/EmployeeManagement"; // Add SystemUser component
import ProfilePage from "./pages/ProfilePage";
import OrderManagement from "./pages/OrderManagement"; // Add Orders component



const App = () => {
  return (
    <BrowserRouter>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/employeemanagement" element={<EmployeeManagement />} />
          <Route path="/inventorymanagement" element={<InventoryManagement />} />
          <Route path="/qualitymanagement" element={<QualityManagement />} />
          <Route path="/salesmanagement" element={<SalesManagement />} />
          <Route path="/productmanagement" element={<ProductManagement />} />
          <Route path="/ordermanagement" element={<OrderManagement />} />
          <Route path="/help" element={<Help />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />

        </Routes>
      </div>

    </BrowserRouter>


  );
};

export default App;
