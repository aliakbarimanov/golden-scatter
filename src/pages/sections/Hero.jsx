// import images
import HeroImg from "../../assets/images/hero.png";

// import icons
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <section id="hero" className="hero">
      <img src={HeroImg} alt="Hero img" />
      <div className="overlay">
        <div className="container">
          <h2 className="heroTitle">Groceries Delivered in 90 Minute</h2>
          <p className="heroDesc">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
          <div className="inputBox">
            <span className="inputTitle">
              <span>Grocery</span>
            </span>
            <input
              type="text"
              id="searchInput"
              className="searchInput"
              placeholder="Search your products from here."
            />
            <button id="searchBtn" className="searchBtn">
              <CiSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
