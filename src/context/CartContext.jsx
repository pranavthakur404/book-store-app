import { createContext, useContext, useEffect, useReducer } from "react";

const cartContext = createContext();

const CartContext = ({ children }) => {
  const reducer = (cartList, { type, payload }) => {
    if (type == "ADD") {
      console.log("add called");
      return [...cartList, payload];
    }
    return cartList;
  };

  const initialState = () => {
    if (JSON.parse(localStorage.getItem("cartItem")) == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("cartItem"));
    }
  };

  initialState();

  const [cartList, dispatch] = useReducer(reducer, initialState());

  const addCartItem = (newObj) => {
    dispatch({
      type: "ADD",
      payload: newObj,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INC_QUANT",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DEC_QUANT",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <cartContext.Provider
      value={{
        cartList,
        addCartItem,
        deleteItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};

export default CartContext;
