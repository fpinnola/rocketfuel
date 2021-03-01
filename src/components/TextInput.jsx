import React from "react";

const inputContainer = {
    border: '1px solid black',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    minHeight: 40,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

const input = {
    color: 'black',
    border: 'none',
    outline: 'none',
    marginLeft: 15,
    marginRight: 10,
    // fontFamily: "Monterrat",
    fontSize: 16,
    width: '100%'
}

function TextInput({
  type = "input",
  containerStyle,
  placeholder,
  textStyle,
  LeftIcon,
  leftIconSize = 20,
  leftIconColor,
  leftIconOnClick,
  RightIcon,
  rightIconSize = 20,
  rightIconColor,
  rightIconOnClick,
  onChange,
  ...otherprops
}) {
  if (type === "textarea") {
    return (
      <div style={inputContainer} style={containerStyle}>
        {LeftIcon && (
          <LeftIcon
            className="left-icon"
            color={leftIconColor}
            size={leftIconSize}
            onClick={leftIconOnClick}
          />
        )}
        <textarea
          {...{ placeholder, onChange, type }}
          style={input}
          {...otherprops}
        />
        {RightIcon && (
          <RightIcon
            className="right-icon"
            color={rightIconColor}
            size={rightIconSize}
            onClick={rightIconOnClick}
          />
        )}
      </div>
    );
  } else {
    return (
      <div style={inputContainer} style={containerStyle}>
        {LeftIcon && (
          <LeftIcon
            className="left-icon"
            color={leftIconColor}
            size={leftIconSize}
            onClick={leftIconOnClick}
          />
        )}
        <input
          {...{ placeholder, onChange, type }}
          style={input}
          {...otherprops}
        />
        {RightIcon && (
          <RightIcon
            className="right-icon"
            color={rightIconColor}
            size={rightIconSize}
            onClick={rightIconOnClick}
          />
        )}
      </div>
    );
  }
}

export default TextInput;
