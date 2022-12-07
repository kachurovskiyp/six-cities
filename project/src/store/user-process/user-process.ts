import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers, Offer } from '../../types/offers-type';
import { Reviews } from '../../types/reviews-type';

import {
  getOffers,
  changeCity,
  loadOffers,
  loadCurrentOffers,
  loadSortedOffers,
  changeSortStatus,
  changeLoadStatus,
  changeLoadCurrentOfferStatus,
  loadCurrentOffer,
  setError,
  loadComments,
  setCurrentOfferID
} from '../action';


type DataProcess = {
  city: string;
  offers: Offers;
  currentOffers: Offers;
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
  city: 'Paris',
  offers: [],
  currentOffers: [],
  sortedOffers: [],
  sortStatus: false,
  loadStatus: false,
  loadCurrentOfferStatus: false,
  currentOfferID: 0,
  error: null,
  comments: [],
  currentOffer: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      },
      name: '',
    },
    description: '',
    goods: [''],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: ''
    },
    id: 0,
    images: [''],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: ''
  }
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
