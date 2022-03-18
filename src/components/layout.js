import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../theme";

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  font-family: "Roboto, sans-serif, serif";
`;

/**
 *
 * @todo shoot, I don't think we can have the title here
 * That would mean, all the pages will have the same title.
 */
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
        <CssBaseline />
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </>
  );
}
