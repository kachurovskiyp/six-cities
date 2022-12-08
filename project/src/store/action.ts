import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offers-type';
import { Reviews } from '../types/reviews-type';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('offers/changeCity');
export const getOffers = createAction<Offers>('offers/getOffers');
export const setCurrentOfferID = createAction<number>('offers/setCurrentOfferID');

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadCurrentOffer = createAction<Offer>('offers/loadcurrentOffer');
export const loadComments = createAction<Reviews>('offers/loadComments');
export const loadUserData = createAction<UserData>('user/loadUserData');

export const loadCurrentOffers = createAction<Offers>('offers/loadCurrentOffers');
export const loadSortedOffers = createAction<Offers>('offers/loadSortedOffers');

export const changeSortStatus = createAction<boolean>('offers/changeSortStatus');
export const changeLoadStatus = createAction<boolean>('offers/changeLoadStatus');
export const changeLoadCurrentOfferStatus = createAction<boolean>('offers/changeLoadCurrentOfferStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('user/setError');
