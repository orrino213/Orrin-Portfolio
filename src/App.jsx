import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactus/ContactUs";
import MyNavbar from "./components/navbar/NavBar";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import equalhousing from "./assets/equalhousing.jpg";

function App() {
  return (
    <body className="body">
      <div>
        <MyNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
        <footer className="footer">
          <img src={equalhousing} alt="logo" />
          <p>Copyright © 2023 Orbeltheloanofficer - All Rights Reserved.</p>
          <p className="pf">NMLS - 1606317</p>
          <p className="pf">DRE - 02102368</p>
        </footer>
      </div>
    </body>
  );
}

export default App;
