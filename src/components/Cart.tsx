import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import { CartItem, CartType, ShopItem } from "../utils/Types";
import CartProduct from "./CartProduct";

type Props = {
	cart: CartType;
	addToCart: (newCartItem: CartItem) => void;
};

const Cart = (props: Props) => {
	const updateAmount = (item: ShopItem, newAmount: number) => {
		props.addToCart({ item: item, amount: newAmount });
	};
	return (
		<Container>
			{props.cart.items.map((item) => (
				<CartProduct
					item={item}
					setBuyAmount={(newAmount: number) =>
						updateAmount(item.item, newAmount)
					}
					key={uniqid()}
				/>
			))}
			<Total>
				<Name>Total</Name>
				<TotalPrice>
					$
					{props.cart.items
						.reduce(
							(partialSum, item) => partialSum + item.item.price * item.amount,
							0
						)
						.toFixed(2)}
				</TotalPrice>
			</Total>
		</Container>
	);
};

const Container = styled.div``;
const Total = styled.div`
	background-color: ${(props) => props.theme.navBackground};
	height: auto;
	text-align: center;
	display: flex;
	justify-content: space-between;
`;
const Name = styled.h2``;
const TotalPrice = styled.p`
	color: lightgreen;
`;

export default Cart;
