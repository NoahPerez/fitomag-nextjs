const baseApiUrl = process.env.NODE_ENV === "production" 
? 'https://site--strapi--bb82cjkgcb9b.code.run/'
: 'http://localhost:1337';

export default baseApiUrl;