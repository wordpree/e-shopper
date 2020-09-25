import React from "react";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { Button, Typography, makeStyles } from "@material-ui/core";

interface IFProps {
  title: string;
}

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    padding: "1em 1.5em",
    justifyContent: "space-between",
    background: "#EF8216",
    alignItems: "center",
    maxHeight: 58,
    "&>*": { color: "#fff" },
  },
}));
const FormHeader = ({ title }: IFProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography>{title}</Typography>
      <Button>
        <CloseOutlined />
      </Button>
    </div>
  );
};
export default FormHeader;
