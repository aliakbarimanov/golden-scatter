// import react icons
import { RiShoppingBag2Fill } from "react-icons/ri";

// import react hooks
import { useState } from "react";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  return (
    <>
      <div className={activeCart ? "cart active" : "cart"}>
        <div className="cartTop">
          <div className="cartCounter">
            <RiShoppingBag2Fill />
            <span className="cartItem">2 item</span>
          </div>
          <button className="closeBtn" onClick={() => setActiveCart(false)}>
            x
          </button>
        </div>
        <div className="cartBody">Body</div>
        <div className="cartFooter">
          <span className="checkout">Checkout</span>
          <span className="totalAmount">$55</span>
        </div>
      </div>
      <div className="cartStick" onClick={() => setActiveCart(true)}>
        <div className="stickItems">
          <RiShoppingBag2Fill />
          <span>2 Items</span>
        </div>
        <div className="stickTotal">$ 1330</div>
      </div>
    </>
  );
};

export default Cart;
