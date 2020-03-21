import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  border-color: #eb4034;
  background-color: #ffcccc;
`;

const Link = styled.a`
  color: #000;
`;

export const ErrorNotification = ({ onCloseCallback, message }) => {
  return (
    <Wrapper>
      <span>{message} </span>
      <Link onClick={() => onCloseCallback()} href="#">
        Try again
      </Link>
    </Wrapper>
  );
};
