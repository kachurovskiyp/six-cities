import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers-type';

export const changeCity = createAction<string>('offers/changeCity');

export const loadCurrentOffers = createAction<Offers>('offers/loadCurrentOffers');
export const loadSortedOffers = createAction<Offers>('offers/loadSortedOffers');
export const changeSortStatus = createAction<boolean>('offers/changeSortStatus');
