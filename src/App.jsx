import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactus/ContactUs";
import MyNavbar from "./components/navbar/NavBar";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
          Copyright © 2023 Orbeltheloanofficer - All Rights Reserved.
        </footer>
      </div>
    </body>
  );
}

export default App;
