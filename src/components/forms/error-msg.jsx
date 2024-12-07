import React from 'react';

const ErrorMsg = ({ error }) => {
  return (
    <>
      <p style={{ color: 'red', fontSize: "14px", marginTop: "5px" }}>{error}</p>
    </>
  );
};

export default ErrorMsg;