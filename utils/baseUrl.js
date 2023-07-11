const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://site--strapi--6vkv6s4mwd2c.code.run"
    : "http://localhost:3000";

export default baseUrl;