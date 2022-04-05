import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ShopItem } from "../utils/Types";

type Props = {
	item: ShopItem;
};

const CartItem = (props: Props) => {
	return (
		<ProductContainer>
			<Thumbnail src={props.item.image} alt={props.item.name} />
			<Name>{props.item.name}</Name>
			<Price>${props.item.price}</Price>
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

export default CartItem;
