const baseApiUrl = process.env.NODE_ENV === "production" 
? 'https://fitomag-vjhx6.ondigitalocean.app/api/'
: 'http://localhost:1337';

export default baseApiUrl;