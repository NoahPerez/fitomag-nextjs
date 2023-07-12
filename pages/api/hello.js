// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
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

const headers = {
  'Content-Type': 'application/json',
  'Authorization': '482ce87af6a642776cb04b673dadc7a30120eace16e7b4f6d5221410a3e99de9bb31d3c461119458e9c0d7fec6d9333fbd534acdbb854e94e4d3b2ecbb7885f5f8425f4356d11d21ff8290572002929bd2b65ae58572b3d80753653348dfdf2760a681a0bdf9ba5b5908b270f58b14883d7fc8a787ccb3edffa5e98ae2a6fb35', // This is where the API key is used
};

// Make the API request using the configured headers
fetch('https://site--strapi--6vkv6s4mwd2c.code.run/data', {
  method: 'GET',
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });

