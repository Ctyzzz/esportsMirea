import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export type HeaderProps = {
  onOpenButtonClick?: () => unknown;
  isAuth?: boolean;
};

export const Header = ({
  onOpenButtonClick,
  isAuth,
}: HeaderProps) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen ? (
        <DesktopHeader onOpenButtonClick={onOpenButtonClick} isAuth={isAuth} />
      ) : (
        <MobileHeader onOpenButtonClick={onOpenButtonClick} isAuth={isAuth} />
      )}
    </>
  );
};
