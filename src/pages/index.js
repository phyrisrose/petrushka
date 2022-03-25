import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { какой_нибудь_предок } from "src/content";

const IndexPage = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Stack spacing={2}>
          {какой_нибудь_предок.map((verse) => (
            <div>
              {verse.map((line) => (
                <Typography variant="body1">{line}</Typography>
              ))}
            </div>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default IndexPage;
