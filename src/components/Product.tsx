import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ShopItem } from "../utils/Types";

type Props = {
	item: ShopItem;
	AddToCart: (amount: number) => void;
};

const Product = (props: Props) => {
	const [buyAmount, setBuyAmount] = useState(1);

	function AmountInputChange(e: ChangeEvent<HTMLInputElement>) {
		setBuyAmount(+e.target.value);
	}

	return (
		<ProductContainer>
			<Name>{props.item.name}</Name>
			<Thumbnail src={props.item.image} alt={props.item.name} />
			<Price>${props.item.price}</Price>
			<AmountContainer>
				<AmountInput value={buyAmount} onChange={AmountInputChange} />
				<IncreaseButton onClick={() => setBuyAmount(buyAmount + 1)}>
					+
				</IncreaseButton>
				<DecreaseButton onClick={() => setBuyAmount(buyAmount - 1)}>
					-
				</DecreaseButton>
			</AmountContainer>
			<AddButton onClick={() => props.AddToCart(buyAmount)}>
				Add to cart
			</AddButton>
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
const AmountInput = styled.input.attrs({ type: "number", min: 0 })``;
const IncreaseButton = styled.button``;
const DecreaseButton = styled.button``;
const AddButton = styled.button``;

export default Product;
