import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "./Posts";

afterEach(() => {
  delete global.fetch;
});

const renderPosts = () =>
  render(
    <MemoryRouter>
      <Posts />
    </MemoryRouter>
  );

test("renders a card per post with its author", async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: "First", image: "a.jpg", author: "Admin" },
          { id: 2, title: "Second", image: "b.jpg", author: "Codv" },
        ]),
    })
  );

  renderPosts();

  expect(await screen.findByRole("link", { name: /first/i })).toHaveAttribute(
    "href",
    "/post/1"
  );
  expect(screen.getByText("By: Codv")).toBeInTheDocument();
});

test("shows an error instead of 'No posts yet' when the API is down", async () => {
  global.fetch = vi.fn(() => Promise.reject(new TypeError("Failed to fetch")));

  renderPosts();

  expect(await screen.findByRole("alert")).toHaveTextContent(/failed to fetch/i);
  expect(screen.queryByText(/no posts yet/i)).not.toBeInTheDocument();
});
