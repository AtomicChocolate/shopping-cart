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
	items: ShopItem[];
};

export type { ShopItem, CartType };
