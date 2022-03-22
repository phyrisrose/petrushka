import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";

import theme from "src/theme";

const Background = styled.div`
  background: ${brown[50]};
`;

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  background: white;
`;

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

/**
 *
 * @todo shoot, I don't think we can have the title here
 * That would mean, all the pages will have the same title.
 */
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Петрушка
            </Typography>
          </Toolbar>
        </AppBar>
        <Offset />
        <Background>
          <MainLayout>{children}</MainLayout>
        </Background>
      </ThemeProvider>
    </>
  );
}
