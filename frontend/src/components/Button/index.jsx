import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: " transition duration-300 hover:bg-blue-900 hover:text-white",
};
const variants = {
  fill: {
    blue_100: "bg-blue-100 text-indigo-900",
    indigo_900: "bg-indigo-900 text-blue-100",
  },
};
const sizes = { xs: "py-px", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_100", "indigo_900"]),
};

export { Button };
