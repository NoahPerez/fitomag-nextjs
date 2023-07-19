// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


// export async function fetcher(url, options = {}) {
//   let response;
//   if (!options) {
//     response = await fetch(url);
//   } else {
//     response = await fetch(url, options);
//   }
//   const data = await response.json();
//   return data;
// }


// import axios from 'axios';

// export async function fetcher(url, options = {}) {
//   try {
//     const response = await axios(url, options);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     // Handle error
//     console.error('Request failed:', error.message);
//     throw error;
//   }
// }

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': '13444a93da176e5713744c034a71fdc152f3ff5f5748e09b034af15e619488300861dd04fdce361ddb7bb6ee1e954c15ccfcb8e5a75dc60560a8fbfae34600d1871a24537f2215008832bdc0d36749c96f396636050e0c80387d3f31e02aad150e960d7d29ea02837b3d2d553e60be2af226773530fcf74a241323da2ed1b558', // This is where the API key is used
// };

// // Make the API request using the configured headers
// fetch('https://site--strapi--6vkv6s4mwd2c.code.run/data', {
//   method: 'GET',
//   headers: headers,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response data
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error(error);
//   });

