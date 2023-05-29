import { render, screen, fireEvent } from '@testing-library/react';
import Login, { validatePassword } from "./components/login/Login";

describe("validatePassword", () => {
  it("returns true if the password has 6 numerical characters", () => {
    const isValid = validatePassword("123456");
    expect(isValid).toBe(true);
  });

  it("returns false if the password does not have 6 numerical characters", () => {
    const isValid = validatePassword("12345");
    expect(isValid).toBe(false);
  });
});