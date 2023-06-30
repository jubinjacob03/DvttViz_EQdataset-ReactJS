import React from "react";

function Sheet7() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <center>
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/views/Ca-4_16878556609090/EarthquakedetailswithtotalNst"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </center>
    </div>
  );
}

export default Sheet7;
