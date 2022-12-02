import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { Offers } from '../types/offers-type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { loadOffers, changeLoadStatus } from './action';
import { store } from '../store';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    store.dispatch(changeLoadStatus(true));
    dispatch(loadOffers(data));
    store.dispatch(changeLoadStatus(false));
  },
);
