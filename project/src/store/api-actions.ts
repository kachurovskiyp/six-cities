import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../types/store';
import { Offers, Offer } from '../types/offers-type';
import { Reviews } from '../types/reviews-type';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { CommentsData } from '../types/comments';

import { saveToken, dropToken } from '../services/token';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadUserData, loadComments, loadOffers, loadCurrentOffer, changeLoadStatus, requireAuthorization, setError, changeLoadCurrentOfferStatus } from './action';
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

export const fetchCurrentOfferAction = createAsyncThunk<void, number, {
  offerID: number;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (offerID, {dispatch, extra: api}) => {
    const routeByID = `${APIRoute.Offers}/${offerID}`;

    const {data} = await api.get<Offer>(routeByID);
    store.dispatch(changeLoadCurrentOfferStatus(true));
    dispatch(loadCurrentOffer(data));
    store.dispatch(changeLoadCurrentOfferStatus(false));
  },
);

export const postComment = createAsyncThunk<void, CommentsData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/postComment',
  async (commentData, {dispatch, extra: api}) => {
    const routeByID = `${APIRoute.Comments}/${commentData.offerID}`;
    const data = {
      comment: commentData.comment,
      rating: commentData.rating
    };
    await api.post<CommentsData>(routeByID, data);
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
  async (offerID, {dispatch, extra: api}) => {
    const routeByID = `${APIRoute.Comments}/${offerID}`;

    const {data} = await api.get<Reviews>(routeByID);
    dispatch(loadComments(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.LogIn);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.LogIn, {email, password});
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
  async (_arg, {dispatch, extra: api}) => {
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
