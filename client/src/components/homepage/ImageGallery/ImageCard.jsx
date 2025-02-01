import * as React from "react";

export const ImageCard = ({ src, className, aspectRatio }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain w-full rounded-lg ${className}`}
      style={{ aspectRatio }}
    />
  );
};