import React from "react";
import classnames from "classnames";

const Button = React.memo(
  ({
    children,
    className,
    size = "medium-md",
    usage = "default",
    outline = "brand",
    ...other
  }) => {
    return (
      <button
        className={classnames(
          "flex items-center justify-center gap-3 font-medium leading-7 min-w-[150px] transition-all duration-200 ease-in-out", // Common classes
          className, // Allow custom class overrides
          {
            // -------- Padding & Border Radius based on Size -------- //
            // Large Sizes
            "p-6 rounded-[10px]": size === "large-md",
            "p-6 rounded-[24px]": size === "large-lg",
            "p-6 rounded-[26px]": size === "large-xl",

            // Medium Sizes
            "py-3 px-6 rounded-[10px]": size === "medium-md",
            "py-3 px-6 rounded-[24px]": size === "medium-lg",
            "py-3 px-6 rounded-[26px]": size === "medium-xl",

            // Default Sizes
            "py-4 px-3 rounded-[10px]": size === "default-md",
            "py-4 px-3 rounded-[24px]": size === "default-lg",
            "py-4 px-3 rounded-[26px]": size === "default-xl",

            // Small Sizes
            "py-2 px-3 rounded-[10px]": size === "small-md",
            "py-2 px-3 rounded-[24px]": size === "small-lg",
            "py-2 px-3 rounded-[26px]": size === "small-xl",
            // -------- End of Padding & Border Radius -------- //

            // -------- Background Colors based on Usage -------- //
            "bg-black-1000 text-white": usage === "default",
            "bg-primary-500 text-primary-1000": usage === "primary",
            "bg-primary-800 text-white": usage === "info",
            "bg-dark-blue text-black-100": usage === "brand",
            "bg-white text-primary-700": usage === "click",
            "bg-gradient-to-r from-fadish-blue to-fade-blue text-white hover:bg-white":
              usage === "primary-gradient",
            // -------- End of Background Colors -------- //

            // -------- Border Styles -------- //
            "border border-brand": outline === "brand",
            "border border-primary-800": outline === "primary",
            "border-none": outline === "none",
            // -------- End of Border Styles -------- //
          }
        )}
        {...other}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
