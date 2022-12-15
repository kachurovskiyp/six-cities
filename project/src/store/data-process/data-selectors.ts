import { NameSpace } from '../../const';
import { State } from '../../types/store';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getCities = (state: State) => state[NameSpace.Data].cities;
export const getLoadCurrentOfferStatus = (state: State) => state[NameSpace.Data].loadCurrentOfferStatus;
export const getStatus = (state: State) => state[NameSpace.Data].loadStatus;
export const getCurrentCity = (state: State) => state[NameSpace.Data].currentCity;
export const getActiveOffer = (state: State) => state[NameSpace.Data].activeOffer;
export const getError = (state: State) => state[NameSpace.Data].error;
export const getSortStatus = (state: State) => state[NameSpace.Data].sortStatus;
export const getSortedOffers = (state: State) => state[NameSpace.Data].sortedOffers;
export const getOfferID = (state: State) => state[NameSpace.Data].currentOfferID;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const getCurrentOffer = (state: State) => state[NameSpace.Data].currentOffer;
export const getCurrentOffers = (state: State) => state[NameSpace.Data].currentOffers;
export const getFavoriteOffers = (state: State) => state[NameSpace.Data].favoriteOffers;
export const getNearbyOffers = (state: State) => state[NameSpace.Data].nearbyOffers;
