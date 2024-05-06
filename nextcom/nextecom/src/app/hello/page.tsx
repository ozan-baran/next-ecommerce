import React from "react";

interface Props {
  name: string;
}

const Hello: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for visiting our website.</p>
    </div>
  );
};

export default Hello;
