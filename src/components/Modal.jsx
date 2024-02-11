// import react icons
import { IoMdBasket } from "react-icons/io";

const Modal = () => {
  return (
    <div className="modal">
      <div className="leftSide">
        <div className="mainImg">
          <img src="#" alt="#" />
        </div>
        <ul className="imageList">
          <li className="imageItem">
            <img src="#" alt="#" />
          </li>
          <li className="imageItem">
            <img src="#" alt="#" />
          </li>
          <li className="imageItem">
            <img src="#" alt="#" />
          </li>
          <li className="imageItem">
            <img src="#" alt="#" />
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <h2 className="modalTitle">DDD</h2>
        <p className="modalQuantity">DDD</p>
        <p className="modalDesc">DDD</p>
        <div className="navigations">
          <button>Fruit vegetables</button>
          <button>Vegetables</button>
        </div>
        <div className="modalFooter">
          <p className="modalPrice">$ DDD</p>
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
