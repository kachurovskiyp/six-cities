import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers-type';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('offers/changeCity');
export const getOffers = createAction<Offers>('offers/getOffers');
export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadCurrentOffers = createAction<Offers>('offers/loadCurrentOffers');
export const loadSortedOffers = createAction<Offers>('offers/loadSortedOffers');
export const changeSortStatus = createAction<boolean>('offers/changeSortStatus');
export const changeLoadStatus = createAction<boolean>('offers/changeLoadStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('user/setError');
