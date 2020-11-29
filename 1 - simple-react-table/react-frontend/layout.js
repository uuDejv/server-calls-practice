import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import SimpleTable from "./components/simple-table";

const Layout = () => {
  return (
    <Wrapper>
      <SimpleTable
        data={[{ AL: 100, AT: 110, BE: 120 }]}
        columns={["AL", "AT", "BE"]}
      ></SimpleTable>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  padding: 20vh;

  table,
  th,
  td {
    border: 1px solid black;
  }
`;
