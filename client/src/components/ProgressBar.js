import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const Bar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: ${({ percentFunded }) =>
    percentFunded >= 100 ? "#1CBC2C" : "#ef5f3c"};
  width: ${({ percentFunded }) =>
    percentFunded >= 100 ? 100 : percentFunded}%;
`;

export const ProgressBar = props => {
  return (
    <Wrapper>
      <Bar {...props}></Bar>
    </Wrapper>
  );
};

// ProgressBar.propTypes = {};
