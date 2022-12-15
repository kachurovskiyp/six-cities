import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, defaultCity, defaultOffer } from '../../const';
import { Offers, Offer } from '../../types/offers-type';
import { Reviews } from '../../types/reviews-type';
import { City } from '../../types/city-types';

import {
  getOffers,
  changeCurrentCity,
  loadOffers,
  loadCities,
  loadCurrentOffers,
  loadNearbyOffers,
  loadSortedOffers,
  loadFavoriteOffers,
  changeSortStatus,
  changeLoadStatus,
  changeLoadCurrentOfferStatus,
  loadCurrentOffer,
  setError,
  loadComments,
  setCurrentOfferID,
  setActiveOffer
} from '../action';


type DataProcess = {
  cities: City[];
  currentCity: City;
  offers: Offers;
  activeOffer: Offer;
  currentOffers: Offers;
  favoriteOffers: Offers;
  nearbyOffers: Offers;
  sortedOffers: Offers;
  sortStatus: boolean;
  loadStatus: boolean;
  loadCurrentOfferStatus: boolean;
  error: string | null;
  currentOffer: Offer;
  currentOfferID: number;
  comments: Reviews;
};

const initialState: DataProcess = {
  cities: [],
  offers: [],
  currentOffers: [],
  currentOffer: defaultOffer,
  activeOffer: defaultOffer,
  sortedOffers: [],
  nearbyOffers: [],
  favoriteOffers: [],
  sortStatus: false,
  loadStatus: false,
  loadCurrentOfferStatus: false,
  currentOfferID: 0,
  error: null,
  comments: [],
  currentCity: defaultCity,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(changeCurrentCity, (state, action) => {
        state.currentCity = action.payload;
      })
      .addCase(loadCities, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(setActiveOffer, (state, action) => {
        state.activeOffer = action.payload;
      })
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(loadNearbyOffers, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(loadCurrentOffers, (state, action) => {
        state.currentOffers = action.payload;
      })
      .addCase(loadFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(loadSortedOffers, (state, action) => {
        state.sortedOffers = action.payload;
      })
      .addCase(changeSortStatus, (state, action) => {
        state.sortStatus = action.payload;
      })
      .addCase(changeLoadStatus, (state, action) => {
        state.loadStatus = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(changeLoadCurrentOfferStatus, (state, action) => {
        state.loadCurrentOfferStatus = action.payload;
      })
      .addCase(loadCurrentOffer, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(loadComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setCurrentOfferID, (state, action) => {
        state.currentOfferID = action.payload;
      });
  }
});

