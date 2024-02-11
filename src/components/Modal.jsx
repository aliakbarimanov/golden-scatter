// import react icons
import { IoMdBasket } from "react-icons/io";

const Modal = (data) => {
  return (
    <div className="modal">
      <div className="leftSide">
        <div className="mainImg">
          <img src={data.data.data.main_image} alt={data.data.data.title} />
        </div>
        <ul className="imageList">
          <li className="imageItem">
            <img src={data.data.data.main_image} alt={data.data.data.title} />
          </li>
          <li className="imageItem">
            <img src={data.data.data.main_image} alt={data.data.data.title} />
          </li>
          <li className="imageItem">
            <img src={data.data.data.main_image} alt={data.data.data.title} />
          </li>
          <li className="imageItem">
            <img src={data.data.data.main_image} alt={data.data.data.title} />
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <h2 className="modalTitle">{data.data.data.title}</h2>
        <p className="modalQuantity">
          {data.data.data.amount_by_unit} {data.data.data.unit}
        </p>
        <p className="modalDesc">{data.data.data.description}</p>
        <div className="navigations">
          <button>Fruit vegetables</button>
          <button>Vegetables</button>
        </div>
        <div className="modalFooter">
          <p className="modalPrice">$ {data.data.data.price}</p>
          <button>
            <IoMdBasket />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
