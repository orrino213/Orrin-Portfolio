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
          <div className="footer-container">
            <p>NMLS - 1606317</p>
            <p>DRE - 02102368</p>
            <p>Copyright © 2023 Orbeltheloanofficer - All Rights Reserved.</p>
            <p>
              Visit equitysmartloans.com. Rates, Fees and Programs are subject
              to change without notice. This is not a guarantee or a commitment
              to lend. Some products may not be available in all states. Not all
              applicants qualify for financing, subject to review of
              credit/collateral. Equity Smart Home Loans NMLS#: 856170 DRE#:
              01906808 Headquarters: 1499 Huntington Dr Suite 500, Sout
              Pasadena, CA 91030, (323) 258-4317
            </p>
            <img className="footer-image" src={equalhousing} alt="logo" />
          </div>
        </footer>
      </div>
    </body>
  );
}

export default App;
