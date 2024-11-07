
import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormTextField = ({ placeholder, label, type, ...props }: any) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink size='small' htmlFor={field.name}>
        {label}
      </InputLabel>
      <OutlinedInput
        type={type === "password" && !showPassword ? "password" : "text"}
        color='primary'
        size='small'
        inputProps={{
          value: field.value,
        }}
        placeholder={placeholder}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        endAdornment={
          type === "password" ? (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {<Icon component={showPassword ? VisibilityOff : Visibility} />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
      <FormHelperText error={meta.touched && Boolean(meta.error)}>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};

export default FormTextField;
