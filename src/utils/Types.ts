type ShopItem = {
	name: string;
	image: string;
	description: string;
	price: number;
};

type CartType = {
	items: ShopItem[];
};

export type { ShopItem, CartType };
