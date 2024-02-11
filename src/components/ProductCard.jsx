// import react icons
import { IoMdBasket } from "react-icons/io";

// import redux toolkit
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const ProductCard = (data) => {
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <div className="cardImage">
          {data.data.main_image?.includes("http://64.226.66.94/") ? (
            <img src={data.data.main_image} alt={data.data.title} />
          ) : (
            <img
              src={`http://64.226.66.94/` + data.data.main_image}
              alt={data.data.title}
            />
          )}
        </div>
        <h3 className="cardTitle">{data.data.title}</h3>
        <p className="cardDesc">
          {data.data.amount_by_unit} {data.data.unit}
        </p>
        <div className="cardFooter">
          <span className="price">$ {data.data.price}</span>
          <button
            id="cardBtn"
            className="cardBtn"
            onClick={()=>dispatch(addToCart(data))}
          >
            <IoMdBasket />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
