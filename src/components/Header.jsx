// import components
import Cart from "./Cart";

// import react icons
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosHelpCircle } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";

// import link
import { Link } from "react-router-dom";

// import react hooks
import { useEffect, useState } from "react";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://64.226.66.94/api/categories/");
      const data = await response.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <header id="header" className="header">
      <div className="container">
        <div className={activeMobileMenu ? "mobileMenu active" : "mobileMenu"}>
          <button
            className="closeBtn"
            onClick={() => setActiveMobileMenu(false)}
          >
            <span>close</span>
          </button>
          <ul className="categoryList">
            {categories.map((category, ind) => (
              <li className="category" key={ind}>
                <Link to="#">{category.title}</Link>
              </li>
            ))}
          </ul>
          <li className="mobileLink">
            <Link to="#">Offer</Link>
          </li>
          <li className="mobileLink">
            <Link to="#">
              <IoIosHelpCircle />
              <span>Need help</span>
            </Link>
          </li>
        </div>
        <nav className="navBar">
          <div className="navList">
            <div className="leftSide">
              <button
                className="barIcon"
                onClick={() => setActiveMobileMenu(true)}
              >
                <HiMiniBars3CenterLeft />
              </button>
              <h2 className="logo">
                <Link to="#">
                  Pick<span>Bazar</span>
                </Link>
              </h2>
              <select
                name="categoryList"
                id="categoryList"
                className="categoryList"
              >
                {categories.map((category, ind) => (
                  <option value={category.title} key={ind}>
                    <span>{category.title}</span>
                    <FaCaretDown />
                  </option>
                ))}
              </select>
            </div>
            <div className="rightSide">
              <Link to="#">Offer</Link>
              <Link to="#">
                <IoIosHelpCircle />
                <span>Need help</span>
              </Link>
              <button className="langBtn">English</button>
              <button className="joinBtn">Join</button>
            </div>
          </div>
        </nav>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
