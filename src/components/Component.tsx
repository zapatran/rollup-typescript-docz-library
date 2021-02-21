import React, { FC } from 'react';

export interface Props {
  /**
   * This is a pretty good description for this prop.
   */
  name: string;
  onChange?: () => void;
}

export const Component: FC<Props> = ({ name }) => (
  <div>
    <div>{`Hello World ${name}`}</div>
  </div>
);
