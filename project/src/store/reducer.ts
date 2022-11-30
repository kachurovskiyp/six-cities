import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentOffers, loadSortedOffers, changeSortStatus } from './action';
import { offers } from '../mocks/offers';


const InitialState = {
  city: 'Paris',
  offers: offers,
  sortedOffers: offers,
  sortStatus: false,
};

const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadCurrentOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(changeSortStatus, (state, action) => {
      state.sortStatus = action.payload;
    });
});

export {reducer};
