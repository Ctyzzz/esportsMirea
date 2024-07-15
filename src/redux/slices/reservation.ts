import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  startHour as hoursList,
  startMin as minsList,
  duration,
  // @ts-ignore
} from "@data/reservation"; 
import axios from "@src/axios";
import {
  countAvailableDate,
  countDuration,
  countHours,
  countMins,
  isDateAvailable,
  stringifyDate,
  // @ts-ignore
} from "@helpers/booking/countStartTimeOptions";
import { DefaultThunkApi } from "@redux/store";
import { AxiosError } from "axios";

export const fetchBooking = createAsyncThunk<any, void, DefaultThunkApi>(
  "booking/bookings",
  async (_, { getState }) => {
    const token = Cookies.get("accessToken");

    if (token) {
      const dateParam = getState().reservationReducer.startDate.slice(0, 10);
      const durationParam = getState().reservationReducer.startDuration.value || duration[0].value;
      const categoryParam = getState().reservationReducer.pickedCategory || "all";

      const params = new URLSearchParams();
      params.append("date", dateParam);
      params.append("duration", durationParam);
      params.append("category", categoryParam);

      const { data } = await axios.get(`/bookings/slots`, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    }

    throw new Error("Unauthorized");
  }
);

export const fetchCategories = createAsyncThunk(
  "booking/categories",
  async () => {
    const token = Cookies.get("accessToken");

    if (token) {
      const { data } = await axios.get(`/devices/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    }

    throw new Error("Unauthorized");
  }
);

export const fetchCreateBooking = createAsyncThunk(
  "booking/createBooking",
  async (params, { getState, rejectWithValue }) => {
    try {
      const date = getState().reservationReducer.startDate.slice(0, 10);
      const duration = getState().reservationReducer.startDuration.value;

      const body = {
        device_id: params.id,
        booking_date: date,
        booking_time: params.time,
        booking_duration: duration,
      };

      const token = Cookies.get("accessToken");
      const { data } = await axios.post(`/bookings/@me/create`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (e: any) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response!.data.detail);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);
export const fetchMyBookings = createAsyncThunk(
  "booking/myBookings",
  async () => {
    const token = Cookies.get("accessToken");
    const { data } = await axios.get(`/bookings/@me?limit=20&offset=0`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  }
);

export const fetchUpdateMyBooking = createAsyncThunk(
  "booking/updateBooking",
  async (params, { rejectWithValue }) => {
    try {
      const token = Cookies.get("accessToken");
      const { data } = await axios.patch(`/bookings/@me/cancel/${params.id}`, params.body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (e: any) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response!.data.detail);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);

export const initialState = {
  pickedCategory: null,
  durationOptions: duration,
  reservationTime: null,
  categories: [],
  bookings: {
    data: [],
    status: "",
  },
  groupVR: {
    id: "",
    slots: [],
  },
  showBookingModal: false,
  myBookings: {
    data: [],
    status: "",
  },
  canceledStatus: "",
  mobileTitle: "",
  mobileDescription:
    "Выберите тип устройства, которое вы хотите забронировать:",
  hoursOptions: countHours(hoursList),
  minsOptions: countMins(minsList, Number(hoursList[0])),
  startHour: null,
  startMin: null,
  startDuration: null,
  startDate: countAvailableDate(stringifyDate(new Date())),
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setPickedCategory: (state, action) => {
      state.pickedCategory = action.payload;
    },

    setShowBookingModal: (state, action) => {
      state.showBookingModal = action.payload;
    },
    setMobileTitle: (state, action) => {
      state.mobileTitle = action.payload;
    },
    setMobileDescription: (state, action) => {
      state.mobileDescription = action.payload;
    },
    setHoursOptions: (state) => {
      const countedHours = countHours(hoursList, state.startDate);
      state.hoursOptions = countedHours;
      state.startHour = countedHours[0];
    },
    setStartHour: (state, action) => {
      state.startHour = action.payload;
    },
    setMinsOptions: (state) => {
      const countedMins = countMins(
        minsList,
        state.startHour,
        new Date(state.date)
      );
      state.minsOptions = countedMins;
      state.startMin = countedMins[0];
    },
    setStartMin: (state, action) => {
      state.startMin = action.payload;
    },
    setDurationOptions: (state) => {
      const countedDuration = countDuration(
        state.startHour,
        state.startMin,
        state.hoursOptions
      );
      state.durationOptions = countedDuration;
      state.startDuration = countedDuration[0];
    },
    setStartDuration: (state, action) => {
      if (state.startDuration.value !== action.payload.value) {
        state.startDuration = action.payload;
      }
    },
    setStartDate: (state, action) => {
      if (isDateAvailable(action.payload, state.durationOptions)) {
        state.startDate = countAvailableDate(action.payload);
      } else {
        alert("Некорректная дата");
      }
    },
    setReservationTime: (state, action) => {
      state.reservationTime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooking.pending, (state) => {
        state.bookings.status = "loading";
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.bookings.status = "loaded";
        const data = action.payload.available_bookings;
        state.bookings.data = data;
        state.bookings.status = "loaded";
      })
      .addCase(fetchBooking.rejected, (state) => {
        state.bookings.status = "error";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.bookings.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.bookings.status = "error";
      })
      .addCase(fetchCreateBooking.fulfilled, (state) => {
        state.showBookingModal = true;
      })
      .addCase(fetchCreateBooking.rejected, (_, action) => {
        const errorText = action.payload
          ? `Ошибка бронирования ${action.payload}`
          : `Ошибка бронирования`;

        alert(errorText);
      })
      .addCase(fetchMyBookings.pending, (state) => {
        state.myBookings.status = "loading";
      })
      .addCase(fetchMyBookings.fulfilled, (state, action) => {
        state.myBookings.status = "loaded";
        state.myBookings.data = action.payload.bookings;
      })
      .addCase(fetchMyBookings.rejected, (state) => {
        state.myBookings.status = "error";
        state.myBookings.data = [];
      })
      .addCase(fetchUpdateMyBooking.pending, (state) => {
        state.canceledStatus = "loading";
      })
      .addCase(fetchUpdateMyBooking.fulfilled, (state) => {
        state.canceledStatus = "success";
      })
      .addCase(fetchUpdateMyBooking.rejected, (state, action) => {
        state.canceledStatus = "error";
        const errorText = action.payload
          ? `Ошибка отмены бронирования ${action.payload}`
          : `Ошибка отмены бронирования`;

        alert(errorText);
      });
  },
});
export const reservationReducer = reservationSlice.reducer;
export const {
  setPickedCategory,
  setDate,
  setDuration,
  setStartTime,
  setShowBookingModal,
  setMobileTitle,
  setMobileDescription,
  setHoursOptions,
  setMinsOptions,
  setStartHour,
  setStartMin,
  setDurationOptions,
  setStartDuration,
  setStartDate,
  setReservationTime,
} = reservationSlice.actions;
