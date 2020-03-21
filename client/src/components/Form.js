import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  margin-right: 6px;
`;

const SubmitButton = styled.input`
  padding: 12px;
  background-color: #1cbc2c;
  border: 0px;
  color: #fff;
  border-radius: 5px;
`;

export const Form = ({ submitPledgeCallback }) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitPledgeCallback(value * 1);
        setValue("");
      }}
    >
      <Input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
        autoFocus
      />
      <SubmitButton type="submit" value="Pledge" />
    </form>
  );
};
