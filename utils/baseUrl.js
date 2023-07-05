const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://fitomag-nextjs.pages.dev"
    : "http://localhost:3000";

export default baseUrl;