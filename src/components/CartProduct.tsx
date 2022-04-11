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
			<RemoveButton onClick={() => props.setBuyAmount(0)}>Remove</RemoveButton>
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
	align-items: center;
	flex-wrap: wrap;
	/*
	CSS Grid might be better for this 
	because some sizes swap the positions of
	the Total text and the Remove button randomly 
	*/
`;
const Thumbnail = styled.img`
	height: auto;
	width: 25%;
`;
const Name = styled.h2`
	width: 40%;
`;
const Price = styled.p``;
const RemoveButton = styled.button``;
const TotalPrice = styled.p`
	color: lightgreen;
	width: 15%;
	text-align: center;
	vertical-align: center;
`;

export default CartProduct;
