import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import MyNavbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
