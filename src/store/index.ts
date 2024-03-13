import { Middleware, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../apis/authentication";
import { userApi } from "../apis/user";
import authReducer from "../features/Authentication/authSlice";
import itemsReducer from "../components/Invoice/itemsSlice";

const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(saveToLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
