import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';

import { Offers } from '../types/offers-type';

import {
  getOffers,
  changeCity,
  loadOffers,
  loadCurrentOffers,
  loadSortedOffers,
  changeSortStatus,
  changeLoadStatus,
  requireAuthorization,
  setError,
} from './action';

type InitialState = {
  city: string;
  offers: Offers;
  currentOffers: Offers;
  sortedOffers: Offers;
  sortStatus: boolean;
  authorizationStatus: string;
  loadStatus: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  currentOffers: [],
  sortedOffers: [],
  sortStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  loadStatus: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOffers, (state, action) => {
      state.currentOffers = action.payload;
    })
    .addCase(loadSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(changeSortStatus, (state, action) => {
      state.sortStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeLoadStatus, (state, action) => {
      state.loadStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;});
});

export { reducer };
