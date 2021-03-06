import { createBrowserHistory } from "history";

// create app history if possible, as singleton
export const appHistory =
  typeof window !== "undefined" && window.document && window.document.createElement ? createBrowserHistory() : false;

export default appHistory;
