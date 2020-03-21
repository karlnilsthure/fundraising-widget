import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  border-color: #1cbc2c;
  background-color: #dff0d8;
`;

const Link = styled.a`
  color: #000;
`;

export const SuccessNotification = props => {
  return (
    <Container>
      <span>Thank you for your pledge! </span>
      <Link href="#">Close</Link>
    </Container>
  );
};

// SuccessNotification.propTypes = {

// };
