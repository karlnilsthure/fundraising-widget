import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { ToolTip } from "./components/ToolTip";
import { ProgressBar } from "./components/ProgressBar";
import { SuccessNotification } from "./components/SuccessNotification";
import { ErrorNotification } from "./components/ErrorNotification";
import { Form } from "./components/Form";

const BoxFrame = styled.div`
  width: 250px;
  border: 1px solid #eaeaea;
  text-align: left;
`;

const BoxFrameContent = styled.div`
  margin: 10px;
`;

export const Widget = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [moneyRaised, setMoneyRaised] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitPledge = pledge => {
    setIsFetching(true);
    fetch("http://localhost:4000/api/addNewPledge", {
      method: "POST",
      body: JSON.stringify({ pledge })
    })
      .then(res => res.json())
      .then(({ totalAmount }) => {
        setMoneyRaised(totalAmount);
        setIsFetching(false);
      });
    setShowSuccess(true);
  };

  const percentFunded = (moneyRaised / 1000) * 100;
  const showForm = !showSuccess && !showError;

  useEffect(() => {
    if (moneyRaised === null) {
      setIsFetching(true);
      fetch("http://localhost:4000/api/totalAmountPledged")
        .then(res => res.json())
        .then(({ totalAmount }) => {
          setMoneyRaised(totalAmount);
          setIsFetching(false);
        });
    }
  }, []);

  if (isFetching) return <div>Loading widget..</div>;

  return (
    <div>
      <h2>The fundraising widget</h2>
      <ToolTip percentFunded={percentFunded} />
      <BoxFrame>
        <ProgressBar percentFunded={percentFunded} />
        <BoxFrameContent>
          <p>
            {percentFunded < 100 && (
              <span>Only 3 days left to fund this project, </span>
            )}
            <strong>${moneyRaised}</strong> has been raised towards the goal to
            raise <strong>$1000</strong>.
          </p>
          <p>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </p>
          {showForm && (
            <Form
              submitPledgeCallback={submitPledge}
              showErrorNotification={message => {
                setErrorMessage(message);
                setShowError(true);
              }}
            />
          )}
          {showSuccess && (
            <SuccessNotification
              onCloseCallback={() => setShowSuccess(false)}
            />
          )}
          {showError && (
            <ErrorNotification
              message={errorMessage}
              onCloseCallback={() => setShowError(false)}
            />
          )}
        </BoxFrameContent>
      </BoxFrame>
    </div>
  );
};
