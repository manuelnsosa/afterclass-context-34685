import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    /*     const productIndex = cart.findIndex(
      (productInCart) => productInCart.id === product.id,
    );
    // si es -1 quiere decir que no lo encontró
    if (productIndex === -1) {
      setCart([...cart, product]);
    } else {
      const cartCopy = [...cart];
      cartCopy[productIndex].count =
        cartCopy[productIndex].count + product.count;
      setCart(cartCopy);
    } */
    const isProductInCart = cart.find(
      (productInCart) => productInCart.id === product.id,
    );
    if (isProductInCart) {
      const newArray = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            count: productInCart.count + product.count,
          };
        } else {
          return productInCart;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
