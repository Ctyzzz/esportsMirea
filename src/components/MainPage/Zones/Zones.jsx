// import React from "react"
import styles from "./Zones.module.scss";
import H2 from "../../../UI/H2/H2";
import { ZoneItem } from "./ZoneItem";
import { cyberZones } from "../../../const";

export const Zones = () => {
  return (
    <div className={styles.zonesWrapper}>
      <H2>Киберзона</H2>
      <div className={styles.zonesWrapper__zones}>
        {cyberZones.map((obj) => (
          <ZoneItem
            key={obj.id}
            imageUrl={obj.imageUrl}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </div>
    </div>
  );
};
