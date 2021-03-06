import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 480,
  },
}));

export default function Canvas() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [sensor, setSensor] = useState("Pitch");

  const handleDropdownChange = (event) => {
    // Handle change in dropdown menu value
    const sensor_val = event.target.value;
    setSensor(sensor_val);
    console.log(`Dropdown updated state to value ${sensor_val}`);
  };

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          {/* Dropdown*/}
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sensor}
            onChange={handleDropdownChange}
            label="Sensor"
          >
            <MenuItem value={"SOG"}>SOG</MenuItem>
            <MenuItem value={"Rudder"}>Rudder</MenuItem>
            <MenuItem value={"Pitch"}>Pitch</MenuItem>
            <MenuItem value={"Heel"}>Heel</MenuItem>
          </Select>
          <Chart chartSensor={sensor} />
        </Paper>
      </Grid>
      {/* Boat data */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
    </Grid>
  );
}
