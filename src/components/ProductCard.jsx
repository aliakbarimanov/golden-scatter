// import react icons
import { IoMdBasket } from "react-icons/io";

const ProductCard = (data) => {

  return (
    <div className="card">
      <div className="cardImage">
        <img src={data.data.main_image} alt={data.data.title} />
      </div>
      <h3 className="cardTitle">{data.data.title}</h3>
      <p className="cardDesc">{data.data.amount_by_unit} {data.data.unit}</p>
      <div className="cardFooter">
        <span className="price">$ {data.data.price}</span>
        <button id="cardBtn" className="cardBtn">
          <IoMdBasket />
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
