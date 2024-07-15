import { useRef } from "react";
import { useIsIntersecting } from "../../hooks/useIsIntersecting.js";

export const Image = ({
  lazy = "lazy",
  src,
  ...restProps
}) => {
  const ref = useRef(null);
  const isIntersecting = useIsIntersecting(ref, lazy !== "intersecting");

  const getSrc = () => {
    if (lazy !== "intersecting") {
      return src;
    }

    return isIntersecting ? src : undefined;
  };

  return (
    <img
      {...restProps}
      ref={ref}
      src={getSrc()}
      loading={lazy === "lazy" ? "lazy" : "eager"}
    />
  );
};
