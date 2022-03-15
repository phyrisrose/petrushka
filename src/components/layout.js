import React from "react";
import styled from "@emotion/styled";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
