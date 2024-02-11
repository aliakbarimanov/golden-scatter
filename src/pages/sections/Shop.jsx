// import icons
import { FaAngleRight } from "react-icons/fa";

// import components
import ProductCard from "../../components/ProductCard";

// import hooks
import { useEffect, useState } from "react";

// import api providers
import { getCategories, getProducts } from "../../api/ApiProvider";

const Home = () => {

  // api calls
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryID, setCategoryID] = useState(0);

  useEffect(() => {
    const getAllCategories = async () => {
      await getCategories()
        .then((res) => res.json())
        .then((res) => setCategories(res))
        .catch((err) => console.warn(err));
    };

    getAllCategories();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      await getProducts()
        .then((res) => res.json())
        .then((res) => setProducts(res.products))
        .catch((err) => console.warn(err));
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (categoryID !== 0) {
      async function getCatProducts() {
        await fetch(`http://64.226.66.94/api/categories/${categoryID}/`)
          .then((res) => res.json())
          .then((res) => setProducts(res.products))
          .catch((err) => console.warn(err));
      }

      getCatProducts();
    }
  }, [categoryID]);

  return (
    <section id="shop" className="shop">
      <div className="container">
        <ul className="categoryList">
          {categories.map((category, ind) => (
            <li className="categoryItem" key={ind}>
              <button onClick={() => setCategoryID(category.id)}>
                <span>{category.title}</span>
                <FaAngleRight />
              </button>
            </li>
          ))}
        </ul>

        <div className="productList">
          {products.map((product, ind) => (
            <ProductCard data={product} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
