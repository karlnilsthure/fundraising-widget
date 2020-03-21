import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  border-color: #1cbc2c;
  background-color: red;
`;

const Link = styled.a`
  color: #000;
`;

export const ErrorNotification = props => {
  return (
    <Container>
      <span>The pledge must be an integer! </span>
      <Link href="#">Close</Link>
    </Container>
  );
};
