import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, } from "react-router-dom";
import Footer from './components/Footer';
import Product from './pages/Product';
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/menu" element={< Menu />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/product/:id" element={< Product />} />
        <Route path="/homepage" element={< HomePage />} />
        <Route path="/sithembiso-pizza-app" element={< Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;