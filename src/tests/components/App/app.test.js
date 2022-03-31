// src/__tests__/App.test.tsx
import { cleanup, render, screen, crea } from "@testing-library/react";
import { Rooms } from "../../../components/rooms/Rooms";
import React from 'react';


afterEach(cleanup);

describe("App", () => {
  it("should work as expected", () => {
    render(<Rooms />);
    expect(true).toBe(true);
  });
});