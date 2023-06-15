import React from "react";

import { Container } from "./styles";

import FirstComponent from "../../components/default";

const DefaultPage: React.FC = () => {
  return (
    <Container>
      Eu sou uma page
      <FirstComponent />
    </Container>
  );
};

export default DefaultPage;
