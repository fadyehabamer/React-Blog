import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";

afterEach(() => {
  delete global.fetch;
});

test("returns the parsed JSON on success", async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve([{ id: 1 }]) })
  );

  const { result } = renderHook(() => useFetch("/posts"));

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toEqual([{ id: 1 }]);
  expect(result.current.error).toBeNull();
  expect(global.fetch).toHaveBeenCalledWith(
    "/posts",
    expect.objectContaining({ signal: expect.any(Object) })
  );
});

test("reports an error and stops loading when the response is not ok", async () => {
  global.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 }));

  const { result } = renderHook(() => useFetch("/posts"));

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.error).toMatch(/500/);
  expect(result.current.data).toBeNull();
});

test("reports an error when the server cannot be reached", async () => {
  global.fetch = vi.fn(() => Promise.reject(new TypeError("Failed to fetch")));

  const { result } = renderHook(() => useFetch("/posts"));

  await waitFor(() => expect(result.current.error).toBe("Failed to fetch"));
  expect(result.current.loading).toBe(false);
});

test("aborts the pending request on unmount", () => {
  let signal;
  global.fetch = vi.fn((url, options) => {
    signal = options.signal;
    return new Promise(() => {});
  });

  const { unmount } = renderHook(() => useFetch("/posts"));
  expect(signal.aborted).toBe(false);

  unmount();
  expect(signal.aborted).toBe(true);
});
