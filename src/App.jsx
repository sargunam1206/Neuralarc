import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Products from "./pages/Products";
// import Research from "./pages/Research";
// import Trainings from "./pages/Trainings";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/research" element={<Research />} /> */}
          {/* <Route path="/trainings" element={<Trainings />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
