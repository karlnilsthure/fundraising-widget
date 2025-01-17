import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
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

export const SuccessNotification = ({ onCloseCallback }) => {
  return (
    <Wrapper>
      <span>Thank you for your pledge! </span>
      <Link onClick={() => onCloseCallback()} href="#">
        Close
      </Link>
    </Wrapper>
  );
};

// SuccessNotification.propTypes = {

// };
