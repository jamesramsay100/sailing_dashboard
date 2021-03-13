import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Some boat data</Title>
      <Typography component="p" variant="h5">
        Sensor 1
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Something interesting abou the correlation to sensor 1
      </Typography>
      <Typography component="p" variant="h5">
        Sensor 2
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Something interesting abou the correlation to sensor 2
      </Typography>
    </React.Fragment>
  );
}
