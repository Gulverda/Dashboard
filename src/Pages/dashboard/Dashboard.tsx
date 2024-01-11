import React from "react";
import { Box } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import Grid from "@mui/material/Grid";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
      
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;