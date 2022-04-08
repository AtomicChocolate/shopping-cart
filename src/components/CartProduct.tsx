import React from "react";
import styled from "styled-components";
import { CartItem } from "../utils/Types";
import BuyAmount from "./BuyAmount";

type Props = {
	item: CartItem;
	setBuyAmount: (amount: number) => void;
};

const CartProduct = (props: Props) => {
	return (
		<ProductContainer>
			<Thumbnail src={props.item.item.image} alt={props.item.item.name} />
			<Name>{props.item.item.name}</Name>
			<Price>${props.item.item.price}</Price>
			<BuyAmount
				buyAmount={props.item.amount}
				setBuyAmount={props.setBuyAmount}
			/>
			<TotalPrice>
				${(props.item.item.price * props.item.amount).toFixed(2)}
			</TotalPrice>
		</ProductContainer>
	);
};

const ProductContainer = styled.div`
	background-color: ${(props) => props.theme.navBackground};
	height: auto;
	text-align: center;
	display: flex;
	justify-content: space-between;
`;
const Thumbnail = styled.img`
	height: 7.5vh;
	max-width: auto;
`;
const Name = styled.h2``;
const Price = styled.p``;
const TotalPrice = styled.p`
	color: lightgreen;
`;

export default CartProduct;
