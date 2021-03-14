import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("00:00", 12),
  createData("03:00", 11),
  createData("06:00", 12),
  createData("09:00", 9),
  createData("12:00", 13),
  createData("15:00", 12),
  createData("18:00", 11.5),
  createData("21:00", 10.5),
  createData("24:00", undefined),
];

export default function Chart() {
  const theme = useTheme();

  const [chartData, setChartData] = useState([]);

  const loadData = async () => {
    const res = await fetch("/.netlify/functions/getData");
    const resData = await res.json();
    const newData = resData.data.allData.data;
    setChartData(newData);
    console.log(newData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <Title>Boat A</Title>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="TimeStamp"></XAxis>

          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              SOG (knts)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="SOG"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
