export type Owner = {
  name: string;
  avatar: string;
  isPro: boolean;
};

type Coords = {
  lat: number;
  lng: number;
  zoom: number;
};

export type Offer = {
  id: number;
  price: number;
  bedrooms: number;
  guests: number;
  rating: number;
  coords: Coords;
  owner: Owner;
  city: string;
  img: string[];
  equipments: string[];
  title: string;
  type: string;
  description: string;
  isFavorite: boolean;
  isPremium: boolean;
}

export type Offers = Offer[];

