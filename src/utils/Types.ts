type ShopItem = {
	name: string;
	image: string;
	price: number;
};

type CartType = {
	items: ShopItem[];
};

export type { ShopItem, CartType };
