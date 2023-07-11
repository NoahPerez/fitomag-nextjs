const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://21416f71.fitomag-nextjs.pages.dev"
    : "http://localhost:3000";

export default baseUrl;