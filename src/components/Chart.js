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
// import Title from "./Title";
const Chart = ({ chartSensor }) => {
  const theme = useTheme();

  // define state variable that contains data for plotting chart
  const [chartData, setChartData] = useState([]);

  // this function loads FB data and updates chartData state variable
  const loadData = async (sensor) => {
    const res = await fetch(`/.netlify/functions/getData?sensor=${sensor}`);
    const resData = await res.json();
    const newData = resData.data.allData.data;
    setChartData(newData);
    console.log(`Changed chart.js selected sensor to ${sensor}`);
  };

  // whenever state variable chartSensor, reload data and rerender
  useEffect(() => {
    loadData(chartSensor);
  }, [chartSensor]);

  return (
    <React.Fragment>
      {/* <Title>Boat A</Title> */}
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
              {chartSensor}
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey={chartSensor}
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
