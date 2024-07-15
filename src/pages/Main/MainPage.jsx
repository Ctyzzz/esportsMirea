import { ReservBanner } from "../../components/MainPage/ReservBanner/ReservBanner";
// import Tournaments from "../../components/MainPage/Tournaments/Tournaments";
import styles from "./MainPage.module.scss";
import { Zones } from "../../components/MainPage/Zones/Zones";
import Partners from "../../components/MainPage/Partners/Partners";
// import Interesting from "../../components/MainPage/Interesting/Interesting";

import video from "../../assets/videomainpage.mp4";

function MainPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.videoBackground}>
          <video src={video} autoPlay loop muted />
          <h1 className={styles["main-title"]}>
            Киберспортивный центр <br /> рту мирэа
          </h1>
        </div>
        <div className={styles.mainContent}>
          <ReservBanner />
          {/* <Interesting /> */}
          {/* <Tournaments /> */}
          <Zones />
          <Partners />
        </div>
      </div>
    </>
  );
}

export default MainPage;