import { Offers, Offer } from './offers-type';

export type MainProps = {
  offerCount: number;
  offers: Offers;
}

export type OffersProps = {
  offers: Offers;
};

export type OfferProps = {
  offer: Offer;
  mouseHandler: (id: number) => void;
};

export type FavoriteOfferProps = {
  offer: Offer;
};