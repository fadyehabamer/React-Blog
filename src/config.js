// Base URL of the json-server API. Override with REACT_APP_API_URL (e.g. in
// .env.local or your hosting provider) to point the app at a deployed API.
export const API_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:4000"
).replace(/\/+$/, "");
