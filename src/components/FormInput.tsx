import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { TChangeEvent } from "../type";

interface IFProps {
  handleChange(e: TChangeEvent): void;
  value: string;
  type: string;
  label: string;
  name: string;
}

const useStyles = makeStyles({
  textfield: {
    marginTop: "2rem",
    "& input": {
      fontSize: "0.875rem",
    },
  },
});

const FormInput = ({ handleChange, value, type, label, name }: IFProps) => {
  const classes = useStyles();
  return (
    <TextField
      required
      label={label}
      type={type}
      className={classes.textfield}
      fullWidth
      variant="outlined"
      onChange={handleChange}
      inputProps={{ name }}
      value={value}
    />
  );
};

export default FormInput;
