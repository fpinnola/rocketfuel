import React from "react";
import { Link } from "gatsby";

function Button({
  to = false,
  label,
  onClick,
  color,
  size,
  style,
  ...otherProps
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={`button btn-${color} btn-${size} `}
        {...{ style, onClick }}
        {...otherProps}
      >
        {label}
      </Link>
    );
  }
  return (
    <div
      className={`button btn-${color} btn-${size} `}
      {...{ style, onClick }}
      {...otherProps}
    >
      {label}
    </div>
  );
}

export default Button;
