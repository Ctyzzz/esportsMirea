import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import { navLinkReducer } from './slices/link'
import { reservationReducer } from './slices/reservation'
import { authReducer } from './slices/auth'
import { profileReducer } from './slices/profile'
import refreshTokenMiddleware from './refreshTokenMiddleware'

const rootReducer = combineReducers({
  reservationReducer,
  navLinkReducer,
  authReducer,
  profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(refreshTokenMiddleware),
});

// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;

// @ts-ignore
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
export type DefaultThunkApi = {
  state: RootState;
  dispatch: AppDispatch;
};
