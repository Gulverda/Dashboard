import React from "./index";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";

const ribbonContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
};

const cardStyle = {
  width: "200px"
};

const titleStyle = {
  fontSize: "16px",
  color: "#9e3055",
};

const DataRibbon = () => {
  return (
    <Grid container gap={2} style={ribbonContainerStyle}>
      <Grid style={cardStyle}>
        <DataCard
          title="Total Sales"
          value="462"
          description="The totals of all DataSoft products in the current financial year"
          titleStyle={titleStyle}
        />
      </Grid>
      <Grid style={cardStyle}>
        <DataCard
          title="Total Value"
          value="$25,732.53"
          description="The total sales of the current financial year"
          titleStyle={titleStyle} 
        />
      </Grid>
      <Grid style={cardStyle}>
        <DataCard
          title="Avg. Order Value"
          value="$159.30"
          description="The average order value for all sales this current financial year"
          titleStyle={titleStyle} 
        />
      </Grid>
      <Grid style={cardStyle}>
        <DataCard
          title="Conversion rate"
          value="0.61%"
          description="How many pitches become sales"
          titleStyle={titleStyle} 
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
