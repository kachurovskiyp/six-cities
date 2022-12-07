import { NameSpace } from '../../const';
import { State } from '../../types/store';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getloadCurrentOfferStatus = (state: State) => state[NameSpace.Data].loadCurrentOfferStatus;
export const getStatus = (state: State) => state[NameSpace.Data].loadStatus;
export const getCurrentCity = (state: State) => state[NameSpace.Data].city;
export const getError = (state: State) => state[NameSpace.Data].error;
export const getSortStatus = (state: State) => state[NameSpace.Data].sortStatus;
export const getSortedOffers = (state: State) => state[NameSpace.Data].sortedOffers;
export const getOfferID = (state: State) => state[NameSpace.Data].currentOfferID;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const getCurrentOffer = (state: State) => state[NameSpace.Data].currentOffer;
export const getCurrentOffers = (state: State) => state[NameSpace.Data].currentOffers;
