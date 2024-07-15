import { useDispatch, useSelector } from "react-redux";
import BookingDesktop from "./BookingDesktop";
import BookingMobile from "./BookingMobile";
import { useCallback, useEffect, useState } from "react";
import {
  fetchBooking,
  fetchCategories,
  setShowBookingModal,
} from "../../redux/slices/reservation";
import BookingModal from "../../components/Booking/BookingModal/BookingModal";
import { setAccess } from "../../redux/slices/auth";
import Cookies from "js-cookie";

function ReservationPage() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
  const {
    categories,
    startDate,
    startDuration,
    pickedCategory,
    bookings,
    showBookingModal,
  } = useSelector((state) => state.reservationReducer);
  const { accessToken } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBookingModal(false));
    dispatch(fetchCategories());
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const memoFetchBooking = useCallback(() => {
    if (categories.length > 0) {
      dispatch(fetchBooking());
    }
  }, [startDate, startDuration, pickedCategory]);

  useEffect(() => {
    if (startDate && startDuration && pickedCategory) {
      memoFetchBooking();
    }
  }, [startDate, startDuration, pickedCategory]);

  if (bookings.status === "loading") {
    if (categories.length != 0) {
      return isWideScreen ? (
        <>
          <BookingDesktop categories={categories} />
          {showBookingModal && <BookingModal />}
        </>
      ) : (
        <>
          <BookingMobile />
          {showBookingModal && <BookingModal />}
        </>
      );
    }
  } else {
    if (
      categories.length === 0 ||
      bookings.data.length === 0 ||
      bookings.status === "error"
    ) {
      return isWideScreen ? (
        <BookingDesktop isError={true} />
      ) : (
        <BookingMobile isError={true} />
      );
    } else {
      return isWideScreen ? (
        <>
          <BookingDesktop categories={categories} />
          {showBookingModal && <BookingModal />}
        </>
      ) : (
        <>
          <BookingMobile />
          {showBookingModal && <BookingModal />}
        </>
      );
    }
  }
}

export default ReservationPage;
