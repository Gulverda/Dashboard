import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import LinearProgress from "@mui/material/LinearProgress";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  const font = {
    fontFamily: "sans-serif",
    marginTop: "20px"
  }

  const forDiv = {
    marginTop: "50px"
  }

  return (
    <div style={forDiv}>
      <h1 style={font}>Data</h1>
      <p style={font}>
        The bestest of data available here at your finger tips in table form.
        This could be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%", marginTop: "50px"}}>
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </div>
  );
};

export default Data;
