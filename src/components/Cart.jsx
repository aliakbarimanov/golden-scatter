// import react icons
import { RiShoppingBag2Fill } from "react-icons/ri";

// import react hooks
import { useState } from "react";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartListData = useSelector((state) => state.cart.cartListData);

  const dispatch = useDispatch();

  let summary = 0;
  cartListData.map((item) => (summary += Number(item.data.price)));

  return (
    <>
      <div className={activeCart ? "cart active" : "cart"}>
        <div className="cartTop">
          <div className="cartCounter">
            <span className="cartItem">{cartListData.length} item</span>
          </div>
          <button className="closeBtn" onClick={() => setActiveCart(false)}>
            x
          </button>
        </div>
        <ul className="cartBody">
          {cartListData.map((item, ind) => (
            <li className="cartItem" key={ind}>
              <div className="itemQuantity">{ind + 1} .</div>
              <div className="itemImage">
                <img src={item.data.main_image} alt={item.data.title} />
              </div>
              <div className="itemDetails">
                <h5 className="itemName">{item.data.title}</h5>
                <p className="itemPrice">$ {item.data.price}</p>
                <div className="itemCount">
                  1 x {item.data.amount_by_unit} {item.data.unit}
                </div>
              </div>
              <div className="totalPrice">
                $ {Number(item.data.price) * item.quantity}
              </div>
              <button
                className="itemCloseBtn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <div className="cartFooter">
          <span className="checkout">Checkout</span>
          <span className="totalAmount">$ {summary}</span>
        </div>
      </div>
      <div className="cartStick" onClick={() => setActiveCart(true)}>
        <div className="stickItems">
          <RiShoppingBag2Fill />
          <span>{cartListData.length} Item</span>
        </div>
        <div className="stickTotal">$ {summary}</div>
      </div>
    </>
  );
};

export default Cart;
