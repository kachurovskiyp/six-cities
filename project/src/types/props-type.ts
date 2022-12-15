import { Offers, Offer } from './offers-type';
import { City } from './city-types';

export type OfferProps = {
  offer: Offer;
  mouseHandler: (id: number) => void;
};

export type FavoriteOfferProps = {
  offer: Offer;
};

export type MapProps = {
  offers: Offers;
  city: City;
};
