import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";

const paperStyle = {
  background: "#252525", // Set the background color to red
  color: "#9e3055", // Set the text color to black
  padding: "20px", // Add some padding for better visual appearance
};

const TransactionBottomRow = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={paperStyle}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={paperStyle}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={paperStyle}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={paperStyle}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
