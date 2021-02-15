import React from "react";

export interface Props {
  name: string;
}

export const Component: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <div>{`Hello World ${name}`}</div>
    </div>
  );
};
