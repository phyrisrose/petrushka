import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { какой_нибудь_предок } from "src/content";

const IndexPage = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        {какой_нибудь_предок.map((verse) => (
          <p>
            {verse.map((line) => (
              <Typography variant="body1">{line}</Typography>
            ))}
          </p>
        ))}
      </Box>
    </Container>
  );
};

export default IndexPage;
