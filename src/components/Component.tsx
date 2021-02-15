import React from "react";

export interface Props {
  /**
   * This is a pretty good description for this prop.
   */
  name: string;
}

export const Component: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <div>{`Hello World ${name}`}</div>
    </div>
  );
};
