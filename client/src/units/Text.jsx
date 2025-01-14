import classNames from "classnames";
import React from "react";

const FONT_SIZES = {
  // Default font sizes
  "heading-lg-default": "text-[64px] font-medium",
  "heading-md-default": "text-[48px] font-medium",
  "heading-sm-default": "text-[36px] font-medium",
  "heading-xsm-default": "text-[28px] font-medium",
  "body-lg-default": "text-[26px] font-medium",
  "body-md-default": "text-[18px] font-medium",
  "body-sm-default": "text-[14px] font-medium",

  // Mid font sizes
  "heading-lg-mid": "text-[64px] font-semibold",
  "heading-md-mid": "text-[48px] font-semibold",
  "heading-sm-mid": "text-[36px] font-semibold",
  "heading-xsm-mid": "text-[28px] font-semibold",
  "body-lg-mid": "text-[26px] font-semibold",
  "body-md-mid": "text-[18px] font-semibold",
  "body-sm-mid": "text-[14px] font-semibold",

  // Rare font sizes
  "heading-lg-rare": "text-[64px] font-bold",
  "heading-md-rare": "text-[48px] font-bold",
  "heading-sm-rare": "text-[36px] font-bold",
  "heading-xsm-rare": "text-[28px] font-bold",
  "body-lg-rare": "text-[26px] font-bold",
  "body-md-rare": "text-[18px] font-bold",
  "body-sm-rare": "text-[14px] font-bold",
};

const USAGE_COLORS = {
  brand: "text-white",
  default: "text-black-1000",
  primary: "text-primary-700",
  click: "text-primary-1000",
  info: "text-dark-blue",
};

const Text = React.memo(({ size = "body-lg-default", usage = "default", children, className, ...other }) => {
  const textSizeClass = FONT_SIZES[size];
  const usageClass = USAGE_COLORS[usage];

  return (
    <p className={classNames(textSizeClass, usageClass, className)} {...other}>
      {children}
    </p>
  );
});

export default Text;
