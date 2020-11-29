import React from "react";

const SimpleTable = (props) => {
  function getHead(columns) {
    return (
      <tr>
        {columns.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    );
  }
  function getBody(columns) {
    return props.data.map((row) => (
      <tr key={row.timestamp}>
        {columns.map((key) => (
          <th key={key}>{row[key]}</th>
        ))}
      </tr>
    ));
  }

  const columns = props.columns || Object.keys(props.data[1]);
  return (
    <table style={{ width: "100%" }}>
      {getHead(columns)}
      {getBody(columns)}
    </table>
  );
};

export default SimpleTable;
