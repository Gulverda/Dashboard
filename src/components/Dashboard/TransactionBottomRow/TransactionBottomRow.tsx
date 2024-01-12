import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";

const paperStyle = {
  background: "transparent", 
  color: "#9e3055",
  padding: "20px", 
};

const padding = {
  marginTop: "70px",
  paddingLeft: "65px",
  paddingRight: "10px"
}

const TransactionBottomRow = () => {
  return (
    <Grid container spacing={2} style={padding}>
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
