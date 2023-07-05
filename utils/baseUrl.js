const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://71a0503d.fitomag-nextjs.pages.dev"
    : "http://localhost:3000";

export default baseUrl;