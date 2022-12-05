import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';

import { Offers, Offer } from '../types/offers-type';
import { Reviews } from '../types/reviews-type';
import { UserData } from '../types/user-data';

import {
  getOffers,
  changeCity,
  loadOffers,
  loadCurrentOffers,
  loadSortedOffers,
  changeSortStatus,
  changeLoadStatus,
  changeLoadCurrentOfferStatus,
  requireAuthorization,
  loadCurrentOffer,
  setError,
  loadComments,
  loadUserData,
  setCurrentOfferID
} from './action';

type InitialState = {
  city: string;
  offers: Offers;
  currentOffers: Offers;
  sortedOffers: Offers;
  sortStatus: boolean;
  authorizationStatus: string;
  loadStatus: boolean;
  loadCurrentOfferStatus: boolean;
  error: string | null;
  currentOffer: Offer;
  currentOfferID: number;
  comments: Reviews;
  user: UserData;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  currentOffers: [],
  sortedOffers: [],
  sortStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  loadStatus: false,
  loadCurrentOfferStatus: false,
  currentOfferID: 0,
  error: null,
  comments: [],

  user: {
    email: '',
    id: 0,
    token: ''
  },

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
    .addCase(loadUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setCurrentOfferID, (state, action) => {
      state.currentOfferID = action.payload;
    });
});

export { reducer };
