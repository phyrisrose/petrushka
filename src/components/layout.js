import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  font-family: "Roboto, sans-serif, serif";
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}
