import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../types/store';
import { Offers, Offer } from '../types/offers-type';
import { Reviews } from '../types/reviews-type';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data-type';
import { CommentsData, Comment } from '../types/comments';
import { City } from '../types/city-types';

import { saveToken, dropToken } from '../services/token';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadCities, loadNearbyOffers, loadUserData, loadFavoriteOffers, loadComments, loadOffers, loadCurrentOffer, changeLoadStatus, requireAuthorization, setError, changeLoadCurrentOfferStatus } from './action';
import { store } from '../store';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    store.dispatch(changeLoadStatus(true));
    dispatch(loadOffers(data));
    store.dispatch(changeLoadStatus(false));


    const cities: City[] = [];
    const cityNames: string[] = [];

    data.forEach((offer) => {
      cityNames.push(offer.city.name);
    });

    const uniqCityNames = new Set(cityNames);

    uniqCityNames.forEach((cityName) => {
      const tmpOffer = (data.find((offer) => offer.city.name === cityName));
      if(tmpOffer){
        cities.push(tmpOffer.city);
      }
    });

    dispatch(loadCities(cities));
  },
);

export const fetchNearbyOffers = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerID, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Offers}/${offerID}/${APIRoute.Nearby}`;

    const { data } = await api.get<Offers>(routeByID);

    store.dispatch(changeLoadStatus(true));
    dispatch(loadNearbyOffers(data));
    store.dispatch(changeLoadStatus(false));
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (offerID, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Offers}/${offerID}`;

    const { data } = await api.get<Offer>(routeByID);
    store.dispatch(changeLoadCurrentOfferStatus(true));
    dispatch(loadCurrentOffer(data));
    store.dispatch(changeLoadCurrentOfferStatus(false));
  },
);

export const fetchFavoriteStatusIn = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteStatus',
  async (offerID, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Favorites}/${offerID}/1`;

    await api.post<Offer>(routeByID);
    dispatch(fetchFavoriteAction());
    dispatch(fetchOffersAction());
  },
);

export const fetchFavoriteStatusOut = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteStatus',
  async (offerID, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Favorites}/${offerID}/0`;

    await api.post<Offer>(routeByID);
    dispatch(fetchFavoriteAction());
    dispatch(fetchOffersAction());
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorite',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    dispatch(loadFavoriteOffers(data));
  },
);

export const postComment = createAsyncThunk<void, CommentsData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/postComment',
  async (commentData, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Comments}/${commentData.offerID}`;
    const data = {
      comment: commentData.comment,
      rating: commentData.rating
    };
    await api.post<Comment>(routeByID, data);
    dispatch(fetchCommentsAction(commentData.offerID));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsAction',
  async (offerID, { dispatch, extra: api }) => {
    const routeByID = `${APIRoute.Comments}/${offerID}`;

    const { data } = await api.get<Reviews>(routeByID);
    dispatch(loadComments(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.LogIn);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(fetchFavoriteAction());
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.LogIn, { email, password });
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'user/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
