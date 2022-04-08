import React, { useState, createContext } from "react";
import { CartType } from "./Types";

export const CartContext = createContext<CartType>({ items: [] } as CartType);

type Props = {};

export const Provider = (props: Props) => {
	const [cart, updateCart] = useState({ items: [] } as CartType);

	return (
		<CartContext.Provider value={[cart, updateCart]}>
			{props.children}
		</CartContext.Provider>
	);
};
