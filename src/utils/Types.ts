type ShopItem = {
	name: string;
	image: string;
	price: number;
};

type CartItem = {
	item: ShopItem;
	amount: number;
};

type CartType = {
	items: CartItem[];
};

export type { ShopItem, CartItem, CartType };
