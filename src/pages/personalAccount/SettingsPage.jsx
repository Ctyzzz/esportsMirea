import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PersonalAccount.module.scss";
import SettingsHeader from "../../components/settings/SettingsHeader/SettingsHeader";
import SettingsAccount from "../../components/settings/SettingsAccount/SettingsAccount";
import SettingsIntegrations from "../../components/settings/SettingsIntegrations/SettingsIntegrations";
import SettingsNotifications from "../../components/settings/SettingsNotifications/SettingsNotifications";
import SettingsSecurity from "../../components/settings/SettingsSecurity/SettingsSecurity";
import { fetchMe } from "../../redux/slices/profile";

const SettingsPage = () => {
  const { settingsLink } = useSelector((state) => state.navLinkReducer);
  const dispatch = useDispatch();

  const [component, setComponent] = React.useState(<SettingsAccount />);
  React.useEffect(() => {
    switch (settingsLink) {
      case "account":
        setComponent(<SettingsAccount />);
        break;
      // case "security":
      //   setComponent(<SettingsSecurity />);
      //   break;
      case "integrations":
        setComponent(<SettingsIntegrations />);
        break;
      case "notifications":
        setComponent(<SettingsNotifications />);
        break;
    }
  }, [settingsLink]);

  React.useEffect(() => {
    dispatch(fetchMe);
  }, []);

  return (
    <>
      <div className={styles["account"]}>
        <div className={styles["settings"]}>
          <SettingsHeader settingsLink={settingsLink} />
          {component}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
