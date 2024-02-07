// import sass
import "./assets/scss/index.scss";

// import Routes, Route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
