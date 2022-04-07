import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { CartItem } from "../utils/Types";

type Props = {
	item: CartItem;
	setBuyAmount: (amount: number) => void;
};

const CartProduct = (props: Props) => {
	function AmountInputChange(e: ChangeEvent<HTMLInputElement>) {
		props.setBuyAmount(+e.target.value);
	}

	return (
		<ProductContainer>
			<Thumbnail src={props.item.item.image} alt={props.item.item.name} />
			<Name>{props.item.item.name}</Name>
			<Price>${props.item.item.price * props.item.amount}</Price>
			<AmountContainer>
				<AmountInput
					value={props.item.item.price}
					onChange={AmountInputChange}
				/>
				<IncreaseButton
					onClick={() => props.setBuyAmount(props.item.amount + 1)}
				>
					+
				</IncreaseButton>
				<DecreaseButton
					onClick={() => props.setBuyAmount(props.item.amount - 1)}
				>
					-
				</DecreaseButton>
			</AmountContainer>
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
const AmountContainer = styled.div``;
const AmountInput = styled.input.attrs({ type: "number", min: 1 })``;
const IncreaseButton = styled.button``;
const DecreaseButton = styled.button``;

export default CartProduct;
