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
			<Price>${props.item.item.price * props.item.amount}</Price>
			<BuyAmount
				buyAmount={props.item.amount}
				setBuyAmount={props.setBuyAmount}
			/>
		</ProductContainer>
	);
};

const ProductContainer = styled.div`
	background-color: ${(props) => props.theme.navBackground};
	height: auto;
	text-align: center;
`;
const Name = styled.h2``;
const Thumbnail = styled.img`
	max-height: 20vh;
	width: auto;
`;
const Price = styled.p``;

export default CartProduct;
