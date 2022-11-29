import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentOffers } from './action';
import { offers } from '../mocks/offers';


const InitialState = {
  city: 'Paris',
  offers: offers
};

const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadCurrentOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
