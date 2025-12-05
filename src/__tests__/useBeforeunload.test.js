import { expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useBeforeunload } from "..";

const createBeforeunloadEvent = () =>
  new Event("beforeunload", { cancelable: true });

const dispatchWindowEvent = (event) =>
  act(() => {
    window.dispatchEvent(event);
  });

const renderUseBeforeunloadHook = (handler) =>
  renderHook(() => useBeforeunload(handler));

test("handler function is called when beforeunload event is fired", () => {
  const handler = vi.fn();
  renderUseBeforeunloadHook(handler);
  const event = createBeforeunloadEvent();
  dispatchWindowEvent(event);
  expect(handler).toHaveBeenCalledWith(event);
});

test("returnValue on event is set when preventDefault is called", () => {
  renderUseBeforeunloadHook((event) => {
    event.preventDefault();
  });
  const event = createBeforeunloadEvent();
  // jsdom currently doesn't have `BeforeUnloadEvent` implemented, so we're just
  // ensuring `returnValue` is set on `event`
  const set = vi.fn();
  Object.defineProperty(event, "returnValue", { set });
  dispatchWindowEvent(event);
  expect(set).toHaveBeenCalledWith(true);
});

test("returnValue on event is set when a string is returned by handler", () => {
  renderUseBeforeunloadHook(() => "goodbye");
  const event = createBeforeunloadEvent();
  // jsdom currently doesn't have `BeforeUnloadEvent` implemented, so we're just
  // ensuring `returnValue` is set on `event`
  const set = vi.fn();
  Object.defineProperty(event, "returnValue", { set });
  dispatchWindowEvent(event);
  expect(set).toHaveBeenCalledWith("goodbye");
});

test("doesn’t throw if handler is not a function", () => {
  expect(() => {
    renderUseBeforeunloadHook(true);
    renderUseBeforeunloadHook(false);
    renderUseBeforeunloadHook(null);
    renderUseBeforeunloadHook(undefined);
    renderUseBeforeunloadHook("");
    renderUseBeforeunloadHook({});
    renderUseBeforeunloadHook(0);
    dispatchWindowEvent(createBeforeunloadEvent());
  }).not.toThrow();
});
