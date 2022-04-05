import React from "react";
import uniqid from "uniqid";
import items from "../utils/Items";
import { CartType } from "../utils/Types";
import Product from "./Product";

type Props = { AddToCart: () => void };

const Catalog = (props: Props) => {
	return (
		<div>
			{items.map((item) => (
				<Product item={item} AddToCart={props.AddToCart} key={uniqid()} />
			))}
		</div>
	);
};

export default Catalog;
