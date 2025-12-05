import { useBeforeunload } from "./useBeforeunload";

export const Beforeunload = ({ children = null, onBeforeunload }) => {
  useBeforeunload(onBeforeunload);
  return children;
};
