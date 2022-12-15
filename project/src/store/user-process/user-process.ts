import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

import { requireAuthorization, loadUserData } from '../action';


type UserProcess = {
  authorizationStatus: string;
  user: UserData;
};

const user = {
  email: '',
  id: 0,
  token: ''
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(loadUserData, (state, action) => {
        state.user = action.payload;
      });
  }
});
