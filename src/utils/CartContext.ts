import React, { useState, createContext } from 'react';

export const CartContext = createContext({items: []} as CartType);

type Props = {}

export const Provider = (props: Props) => {
  const [cart, updateCart] = useState({items: []} as CartType);

  return (
    <CartContext.Provider value={[items, setItems]}>
      {props.children}
    </CartContext.Provider>
  )