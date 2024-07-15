import { useDispatch, useSelector } from "react-redux";
import { setPickedCategory } from "../../redux/slices/reservation";
import BookingDesktopContainer from "../../components/Booking/BookingDesktopContainer/BookingDesktopContainer";
import Categories from "../../components/Booking/Categories/Categories";
import Booking from "../../components/Booking/Booking/Booking";
import { useEffect } from "react";

function BookingDesktop({ categories, isError }) {
  const token = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isError) {
      dispatch(setPickedCategory(categories[0].slug));
    }
  }, []);
  if (isError) {
    return (
      <BookingDesktopContainer>
        <Booking
          isError={isError}
          errorReason={
            token.token
              ? "Ошибка сервера"
              : "бронирование доступно только студентам РТУ МИРЭА"
          }
          token={token}
        />
      </BookingDesktopContainer>
    );
  }
  return (
    <BookingDesktopContainer>
      <Categories />
      <Booking />
    </BookingDesktopContainer>
  );
}

export default BookingDesktop;
