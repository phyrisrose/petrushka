import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";

import theme from "../theme";

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  font-family: "Roboto, sans-serif, serif";
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Петрушка</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </>
  );
}
