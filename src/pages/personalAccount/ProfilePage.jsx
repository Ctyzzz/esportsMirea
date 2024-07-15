import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AccountHeader from "../../components/personalAccount/AccountHeader/AccountHeader";
import AccountNavbar from "../../components/personalAccount/AccountNavbar/AccountNavbar";
import AccountProfile from "../../components/personalAccount/AccountProfile/AccountProfile";
import AccountTeams from "../../components/personalAccount/AccountTeams/AccountTeams";
import AccountFriends from "../../components/personalAccount/AccountFriends/AccountFriends";
import AccountAchievements from "../../components/personalAccount/AccountAchievements/AccountAchievements";
import { fetchMe } from "../../redux/slices/profile";
import { fetchMyBookings } from "../../redux/slices/reservation";

import styles from "./PersonalAccount.module.scss";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { profileLink } = useSelector((state) => state.navLinkReducer);

  const [component, setComponent] = useState(<AccountProfile />);
  useEffect(() => {
    switch (profileLink) {
      case "profile":
        setComponent(<AccountProfile />);
        break;
      case "teams":
        setComponent(<AccountTeams />);
        break;
      case "achievements":
        setComponent(<AccountAchievements />);
        break;
      case "friends":
        setComponent(<AccountFriends />);
        break;
    }
  }, [profileLink, navigate]);

  useEffect(() => {
    dispatch(fetchMe());
    dispatch(fetchMyBookings());
  }, []);

  const me = useSelector((state) => state.profileReducer.me);

  if (me.status === "loading") return <p>Loading...</p>;

  if (me.status === "error") return null;
  return (
    <div className={styles["account"]}>
      <AccountHeader
        username={me.data.username}
        firstname={me.data.firstname}
        lastname={me.data.lastname}
        roles={me.data.roles}
        avatar={me.data.avatar_url}
      />
      <AccountNavbar profileLink={profileLink} />
      {component}
    </div>
  );
};

export default ProfilePage;
