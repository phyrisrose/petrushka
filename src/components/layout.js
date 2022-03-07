import React from "react";
import styled from "styled-components";

const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
`;

export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
