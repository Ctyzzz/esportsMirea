import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import Cookies from "js-cookie";

export const fetchMe = createAsyncThunk("profile/me", async () => {
  const token = Cookies.get("accessToken");
  const { data } = await axios.get(`/users/@me`, {
    headers: { Authorization: `Bearer ${token}` },
  }); 
  return data;
});

export const fetchUpdateMe = createAsyncThunk(
  "profile/updateMe",
  async (newUserData, { getState }) => {
    const id = (getState() as any).profileReducer.me.data.id;
    const token = Cookies.get("accessToken");
    const { data } = await axios.patch(`/auth/user/me`, newUserData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const initialState = {
  me: {
    data: {},
    status: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.me.status = "loading";
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.me.data = action.payload;
        state.me.status = "loaded";
      })
      .addCase(fetchMe.rejected, (state) => {
        state.me.status = "error";
        window.location.href = 'https://esports.mirea.ru/api/v1/login'
        alert('Ошибка входа, попробуйте еще раз');
      })
      .addCase(fetchUpdateMe.pending, (state) => {
        state.me.status = "loading";
      })
      .addCase(fetchUpdateMe.fulfilled, (state, action) => {
        state.me.data = action.payload;
        state.me.status = "loaded";
      })
      .addCase(fetchUpdateMe.rejected, (state) => {
        state.me.status = "error";
      });
  },
});
export const profileReducer = profileSlice.reducer;
export const {} = profileSlice.actions;
