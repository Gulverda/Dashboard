import React from "react";
import { Box } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import Grid from "@mui/material/Grid";

const center = {
  width: "90%"
}

const center1 ={
  display: "flex",
  justifyContent: "center"
}
const Dashboard = () => {
  return (
    <div style={center1}>
          <Box style={center}>
            <Grid container gap={4} marginTop={2}>
              <DataRibbon />
              <TransactionsPerDay />
            </Grid>
            <TransactionBottomRow />
          </Box>
    </div>
  );
};
export default Dashboard;