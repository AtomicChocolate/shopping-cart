import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { CartItem, ShopItem } from "../utils/Types";
import BuyAmount from "./BuyAmount";

type Props = {
	item: ShopItem;
	addToCart: (newCartItem: CartItem) => void;
};

const Product = (props: Props) => {
	const [buyAmount, setBuyAmount] = useState(1);

	return (
		<ProductContainer>
			<Name>{props.item.name}</Name>
			<Thumbnail src={props.item.image} alt={props.item.name} />
			<Price>${props.item.price}</Price>
			<BuyAmount buyAmount={buyAmount} setBuyAmount={setBuyAmount} />
			<AddButton
				onClick={() => props.addToCart({ item: props.item, amount: buyAmount })}
			>
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
const AddButton = styled.button``;

export default Product;
