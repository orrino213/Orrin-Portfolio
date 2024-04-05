import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import MyNavbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <body className="body">
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
