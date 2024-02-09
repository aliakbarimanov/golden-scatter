// import sass
import "./assets/scss/index.scss";

// import Routes, Route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";

// import pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
