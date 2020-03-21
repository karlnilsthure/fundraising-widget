import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ToolTip } from "./components/ToolTip";
import { ProgressBar } from "./components/ProgressBar";
import { SuccessNotification } from "./components/SuccessNotification";
import { ErrorNotification } from "./components/ErrorNotification";
import { Form } from "./components/Form";

const MainWrapper = styled.div`
  margin: 2em auto;
  max-width: 630px;
`;

const BoxFrame = styled.div`
  width: 250px;
  border: 1px solid #eaeaea;
  text-align: left;
`;

const BoxFrameContent = styled.div`
  margin: 10px;
`;

export const Widget = () => {
  const [moneyRaised, setMoneyRaised] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const submitPledge = pledge => {
    setShowSuccess(true);
    setMoneyRaised(moneyRaised + pledge);
  };

  const percentFunded = (moneyRaised / 1000) * 100;

  console.log(percentFunded);
  return (
    <MainWrapper>
      <h2>The fundraising widget</h2>
      <ToolTip />
      <BoxFrame>
        <ProgressBar percentFunded={percentFunded} />
        <BoxFrameContent>
          <p>
            Only 3 days left to fund this project,{" "}
            <strong>${moneyRaised}</strong> has been raised towards the goal to
            raise <strong>$1000</strong>.
          </p>
          <p>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </p>
          {!showSuccess && <Form submitPledgeCallback={submitPledge} />}
          {showSuccess && (
            <SuccessNotification
              onCloseCallback={() => setShowSuccess(false)}
            />
          )}
          {showError && (
            <ErrorNotification onCloseCallback={() => setShowError(false)} />
          )}
        </BoxFrameContent>
      </BoxFrame>
    </MainWrapper>
  );
};
