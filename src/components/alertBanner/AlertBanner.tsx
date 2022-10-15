import React from "react";
import styled from "styled-components";

type AlertBannerProps = {
  message: string;
};

export default function AlertBanner({ message }: AlertBannerProps) {
  const alertMessage =
    message || "An unexpected error occurred. Please try again later.";

  return (
    <Alert>
      <span>&times;</span>
      {alertMessage}
    </Alert>
  );
}

const Alert = styled.div`
  padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
`;
