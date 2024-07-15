import { useSelector } from "react-redux";
import MobileContainer from "../../components/Booking/MobileContainer/MobileContainer";
import { useEffect, useState } from "react";
import Categories from "../../components/Booking/Categories/Categories";
import NoBooking from "../../components/Booking/NoBooking/NoBooking";
import Booking from "../../components/Booking/Booking/Booking";
import LoginButton from "../../components/Booking/LoginButton/LoginButton";

function BookingMobile({ isError }) {
  const { mobileTitle, mobileDescription, pickedCategory } = useSelector(
    (state) => state.reservationReducer
  );
  const token = useSelector((state) => state.authReducer.accessToken);
  const [component, setComponent] = useState(<Categories />);
  useEffect(() => {
    switch (pickedCategory) {
      case null:
        setComponent(<Categories />);
        break;
      // case "group_VR":
      //   setComponent(<NoBooking reason={"Этот раздел пока недоступен :("} />);
      //   break;
      default:
        setComponent(<Booking category={pickedCategory} />);
        break;
    }
  }, [pickedCategory]);
  if (isError) {
    return (
      <MobileContainer
        title={pickedCategory ? mobileTitle : "Бронирование устройства"}
      >
        <NoBooking
          reason={
            token.token
              ? "Ошибка сервера"
              : "бронирование доступно только студентам РТУ МИРЭА"
          }
        />
        {!token.token && <LoginButton />}
      </MobileContainer>
    );
  }
  return (
    <MobileContainer
      title={pickedCategory ? mobileTitle : "Бронирование устройства"}
      description={!pickedCategory && mobileDescription}
    >
      {component}
    </MobileContainer>
  );
}

export default BookingMobile;
