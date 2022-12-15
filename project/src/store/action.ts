import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offers-type';
import { Reviews } from '../types/reviews-type';
import { UserData } from '../types/user-data';
import { City, Cities } from '../types/city-types';
import { AuthorizationStatus } from '../const';

export const changeCurrentCity = createAction<City>('city/changeCurrentCity');
export const getCities = createAction<Cities>('city/getCities');
export const loadCities = createAction<Cities>('city/loadCities');

export const getOffers = createAction<Offers>('offers/getOffers');
export const setCurrentOfferID = createAction<number>('offers/setCurrentOfferID');
export const setActiveOffer = createAction<Offer>('offers/setActiveOffer');

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadFavoriteOffers = createAction<Offers>('offers/loadFavoriteOffers');
export const loadNearbyOffers = createAction<Offers>('offers/loadNearbyOffers');
export const loadCurrentOffer = createAction<Offer>('offers/loadCurrentOffer');
export const loadComments = createAction<Reviews>('offers/loadComments');
export const loadUserData = createAction<UserData>('user/loadUserData');

export const loadCurrentOffers = createAction<Offers>('offers/loadCurrentOffers');
export const loadSortedOffers = createAction<Offers>('offers/loadSortedOffers');

export const changeSortStatus = createAction<boolean>('offers/changeSortStatus');
export const changeLoadStatus = createAction<boolean>('offers/changeLoadStatus');
export const changeLoadCurrentOfferStatus = createAction<boolean>('offers/changeLoadCurrentOfferStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('user/setError');
