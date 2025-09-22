import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ServiceList from "./components/ServiceList";
import ProducteList from "./components/ProducteList";
import TrainingList from "./components/TrainingList";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/ServiceList" element={<ServiceList />} />
          <Route path="/ProducteList" element={<ProducteList/>} />
          <Route path="/TrainingList" element={<TrainingList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
