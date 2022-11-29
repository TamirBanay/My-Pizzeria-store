import "./Order.css";
import shoppingicon from "./Order-images/shoppingicon.png";
import Product from "../components/Product/Product";
import Cart from "../pages/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Order(props) {
  const [basket, setBasket] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [info, setInfo] = useState();

  useEffect(() => {
    axios.get("data.json").then((res) => setInfo(res.data));
  }, []);

  function showCart() {
    setOpenCart(!openCart);
  }

  const onCartClick = () => {
    setInCart(true);
  };

  const addToBasket = (item) => {
    console.log(basket);

    const inBasket = basket.find((x) => x.id === item.id);
    if (inBasket) {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...inBasket, num: inBasket.num + 1 } : x
        )
      );
    } else {
      setBasket([...basket, { ...item, num: 1 }]);
    }
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromBasket = (item) => {
    setBasket(basket.filter((x) => x.id !== item.id));
    setTotalPrice(totalPrice - item.price);
    console.log(basket);
  };

  return (
    <div>
      {inCart ? (
        <Cart
          basket={basket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          removeFromBasket={removeFromBasket}
          setBasket={setBasket}
        />
      ) : (
        <div>
          <div className="icon-shopping">
            <img
              alt=""
              className="cart-img"
              onClick={(onCartClick, showCart)}
              src={shoppingicon}
            />
          </div>
          {/* hold the cart icon in see the cart items  */}
          {openCart ? (
            <Cart
              basket={basket}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              removeFromBasket={removeFromBasket}
              setBasket={setBasket}
            />
          ) : (
            ""
          )}
          {/* if there is  items in the cart, the orange cercule show   */}
          {basket.length > 0 ? (
            <div className="qty-circule">
              <div className="qty-text">{basket.length}</div>
            </div>
          ) : (
            <div className="qty-circule-emptry"></div>
          )}

          <div className="all-orders">
            {info?.subMenus.map((subMenu) => (
              <div key={subMenu.name}>
                <h1 className="title">{subMenu.name}</h1>
                <div className="orders" id="Pizzas">
                  {subMenu.items.map((item) => (
                    <Product
                      key={item.id}
                      className="pizza-img"
                      product={item}
                      addToCart={addToBasket}
                      removeFromBasket={removeFromBasket}
                      setBasket={setBasket}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
