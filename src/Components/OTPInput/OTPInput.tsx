import React from "react";
import { Box, OutlinedInput, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

interface OTPInputProps extends BoxProps {
  disabled?: boolean;
  length: number;
  onValidCode: (value: string) => void;
  separatorInterval?: number;
}

const OTPInput = ({ disabled = false, length, onValidCode, separatorInterval = 0, sx }: OTPInputProps) => {
  const theme = useTheme();
  let code = React.useRef([] as string[]);
  const boxRef = React.useRef<HTMLElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Allow: backspace, delete, tab, escape, and enter
    if (
      event.keyCode === 46 ||
      event.keyCode === 8 ||
      event.keyCode === 9 ||
      event.keyCode === 27 ||
      event.keyCode === 13 ||
      // Allow: Ctrl+A
      (event.keyCode === 65 && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    } else {
      // Ensure that it is a number and stop the keypress
      if (
        event.shiftKey ||
        ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105))
      ) {
        event.preventDefault();
      }
    }
  };

  const handleChange = (value: string, index: number, nextIndex?: string) => {
    code.current[index] = value;

    const finalCode = code.current.join("");

    if (finalCode.length === length) {
      onValidCode(finalCode);
    } else if (nextIndex && value !== "") {
      const element = boxRef.current?.querySelector(`#${nextIndex}`);

      if (element) (element as HTMLInputElement).focus();
    }
  };

  return (
    <Box
      ref={boxRef}
      sx={{
        display: "flex",
        "& > div:first-child": {
          ml: 0,
        },
        "& > div:last-child": {
          mr: 0,
        },
        ...sx
      }}
    >
      {Array.from(Array(length), (e, index) => (
        <>
          <OutlinedInput
            disabled={disabled}
            sx={{ width: theme.spacing(4.8), height: theme.spacing(4), margin: theme.spacing(1) }}
            key={index}
            id={`input-${index}`}
            name={"otpinput"}
            type='text'
            color='primary'
            size='small'
            autoFocus={index === 0}
            onChange={(event) =>
              handleChange(event.target.value, index, index < length - 1 ? `input-${index + 1}` : "")
            }
            inputProps={{
              maxLength: 1,
              onKeyDown: handleKeyDown,
            }}
          />
          {Boolean(separatorInterval) && (index + 1) % separatorInterval === 0 && index < length - 1 && (
            <Box
              sx={{
                width: theme.spacing(1),
                display: "flex",
                alignItems: "center",
              }}
            >
              -
            </Box>
          )}
        </>
      ))}
    </Box>
  );
};

export default OTPInput;
