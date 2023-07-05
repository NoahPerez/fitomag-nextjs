const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://teza-react.envytheme.com"
    : "http://localhost:3000";

export default baseUrl;