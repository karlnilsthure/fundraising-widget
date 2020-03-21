import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
  background-color: #424242;
  padding: 10px 0;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ToolTip = ({ percentFunded }) => {
  return (
    <Wrapper>
      {percentFunded < 100 ? (
        <span>
          <strong>{percentFunded}%</strong> of the goal funded
        </span>
      ) : (
        <span>Hurray! We are funded.</span>
      )}
    </Wrapper>
  );
};

// ToolTip.propTypes = {

// };
