export type Owner = {
  name: string;
  avatar: string;
  isPro: boolean;
};

export type Offer = {
  id: number;
  price: number;
  bedrooms: number;
  guests: number;
  rating: number;
  owner: Owner;
  img: string[];
  equipments: string[];
  title: string;
  type: string;
  description: string;
  isFavorite: boolean;
  isPremium: boolean;
}

export type Offers = Offer[];

