import { PropsWithChildren } from "react";

import styles from "./FooterIcon.module.scss";

export type FooterIconProps = PropsWithChildren & {
  hover?: boolean;
};

export const FooterIcon = ({
  hover = true,
  children,
}: FooterIconProps) => {
  return (
    <div className={styles["footer-icon"]} data-hover={hover}>
      {children}
    </div>
  );
};