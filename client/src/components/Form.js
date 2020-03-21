import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #1cbc2c;
  border: 0px;
  color: #fff;
  border-radius: 5px;
`;

export const Form = () => {
  return (
    <form>
      <Input type="text" />
      <Button type="submit">Pledge</Button>
    </form>
  );
};
