// import react icons
import { IoMdBasket } from "react-icons/io";

// import react hooks
// import { useState } from "react";

// import components
// import Modal from "../components/Modal";

const ProductCard = (data) => {
  // const [modal, setModal] = useState(false);

  return (
    <>
      {/* <div className="card" onClick={() => setModal(true)}> */}
      <div className="card">
        <div className="cardImage">
          {
            data.data.main_image?.includes("http://64.226.66.94/") ? <img src={data.data.main_image} alt={data.data.title} />
            : <img src={`http://64.226.66.94/`+data.data.main_image} alt={data.data.title} />
          }
        </div>
        <h3 className="cardTitle">{data.data.title}</h3>
        <p className="cardDesc">
          {data.data.amount_by_unit} {data.data.unit}
        </p>
        <div className="cardFooter">
          <span className="price">$ {data.data.price}</span>
          <button id="cardBtn" className="cardBtn">
            <IoMdBasket />
            <span>Cart</span>
          </button>
        </div>
      </div>
      {/* <Modal data={data} className="modalBox" /> */}
    </>
  );
};

export default ProductCard;
