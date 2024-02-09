// import react icons
import { IoMdBasket } from "react-icons/io";

const Modal = () => {
  return (
    <div className="modal">
      <div className="leftSide">
        <div className="mainImg">
          <img src="#" alt="Product img" />
        </div>
        <ul className="imageList">
          <li className="imageItem">
            <img src="#" alt="Product img" />
          </li>
          <li className="imageItem">
            <img src="#" alt="Product img" />
          </li>
          <li className="imageItem">
            <img src="#" alt="Product img" />
          </li>
          <li className="imageItem">
            <img src="#" alt="Product img" />
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <h2 className="modalTitle">Brussels Sprout</h2>
        <p className="modalQuantity">2 lb</p>
        <p className="modalDesc">
          The Brussels sprout is a member of the Gemmifera Group of cabbages,
          grown for its edible buds. The leaf vegetables are typically 1.5–4.0
          cm in diameter and look like miniature cabbages. The Brussels sprout
          has long been popular in Brussels, Belgium, and may have gained its
          name there.
        </p>
        <div className="navigations">
          <button>Fruit vegetables</button>
          <button>Vegetables</button>
        </div>
        <div className="modalFooter">
          <p className="modalPrice">$ 3</p>
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
