import { createContext, useContext, useEffect, useReducer } from "react";

const cartContext = createContext();

const CartContext = ({ children }) => {
  const reducer = (cartList, { type, payload }) => {
    if (type == "ADD") {
      return [...cartList, payload];
    }

    if (type == "DELETE") {
      return cartList.filter((list) => {
        return list.isbn13 !== payload;
      });
    }

    if (type == "INC_QUANT") {
      return cartList.map((list) => {
        if (list.isbn13 == payload) {
          return { ...list, quantity: list.quantity + 1 };
        } else {
          return { ...list };
        }
      });
    }

    if (type == "DEC_QUANT") {
      return cartList.map((list) => {
        if (list.isbn13 == payload) {
          if (list.quantity > 1) {
            return { ...list, quantity: list.quantity - 1 };
          } else {
            return { ...list };
          }
        } else {
          return { ...list };
        }
      });
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
