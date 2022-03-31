import React from "react";
import { ShopItem } from "../utils/Types";

type Props = {
	item: ShopItem;
};

const Product = (props: Props) => {
	return (
		<div>
			<h2>{props.item.name}</h2>
			<img src={props.item.image} alt={props.item.name} />
			<p>${props.item.price}</p>
		</div>
	);
};

export default Product;
