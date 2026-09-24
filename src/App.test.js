import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
  );
});

afterEach(() => {
  delete global.fetch;
});

test("navigates to the create page from the header link under StrictMode", async () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  userEvent.click(screen.getByRole("link", { name: /new post/i }));

  expect(
    await screen.findByRole("heading", { name: /add new post/i })
  ).toBeInTheDocument();
});
