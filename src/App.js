// import sass
import "./assets/scss/index.scss";

// import Routes, Route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";

// import pages
import Home from "./pages/Home";

// import redux store
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
