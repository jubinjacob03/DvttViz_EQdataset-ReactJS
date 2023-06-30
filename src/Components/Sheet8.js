import React from "react";

function Sheet8() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/Ca-4_16878556609090/TotalEarthquakebyyearandtype"
        toolbar="bottom"
        hide-tabs
      ></tableau-viz>
    </div>
  );
}

export default Sheet8;
