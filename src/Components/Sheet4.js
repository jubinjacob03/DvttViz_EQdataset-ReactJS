import React from "react";

function Sheet4() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/Ca-4_16878556609090/DepthinkmHistogram"
        toolbar="bottom"
        hide-tabs
      ></tableau-viz>
    </div>
  );
}

export default Sheet4;
