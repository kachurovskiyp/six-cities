import { Offers, Offer } from './offers-type';

export type MapProps = {
  city: Offer;
  offers: Offers;
  activeOffer: Offer | undefined;
};
