import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}
