import React from "react";
import { render, screen } from "@testing-library/react";

import { Component } from "./Component";

describe("<Component />", () => {
  test("rendered text", () => {
    const name = "Otto";
    render(<Component name={name} />);
    expect(screen.getByText(`Hello World ${name}`)).toBeInTheDocument();
  });
});
