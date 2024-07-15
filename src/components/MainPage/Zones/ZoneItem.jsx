import React from "react";
import { Image } from "../../../UI/Image/index.js";
import styles from "./ZoneItem.module.scss";

export const ZoneItem = ({ imageUrl, title, description }) => {
  const [isMouse, setIsMouse] = React.useState(false);
  const descriptionLines = description.split("\n");

  return (
    <div
      className={styles.zoneItem}
      style={{
        filter: isMouse ? "grayscale(100%)" : "none",
      }}
    // onMouseOver={() => setIsMouse(true)}
    // onMouseOut={() => setIsMouse(false)}
    // onTouchMove={() => setIsMouse(true)}
    // onTouchEnd={() => setIsMouse(false)}
    >
      <Image
        className={styles.background}
        lazy={"intersecting"}
        src={imageUrl}
        alt={"zone-background"}
      />
      <div
        className={styles.item}
        style={{
          opacity: isMouse ? 0 : 1,
        }}
      >
        {title}
      </div>

      <div
        className={styles.item}
        style={{
          opacity: isMouse ? 1 : 0,
          fontFamily: "Montserrat",
          textTransform: "initial",
          fontWeight: "500",
        }}
      >
        {descriptionLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== descriptionLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
