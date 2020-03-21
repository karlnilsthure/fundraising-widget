import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: relative;
  height: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const Bar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #20a1d4;
  width: 75%;
`;

export const ProgressBar = props => {
  return (
    <ProgressBarContainer>
      <Bar></Bar>
    </ProgressBarContainer>
  );
};

// ProgressBar.propTypes = {};
