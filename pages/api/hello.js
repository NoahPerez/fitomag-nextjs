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
  'Authorization': '1604ebb038b4c193dd3d787e5a668143657b8edbe2df198d453f6c6e6fe31476dff5a92fdf70ca8d9ae629e5d6bf430539eb72b280ea7c1c6a35c2dd42282ddd1c661b378c68852ffbabf6739636b02153b8b4a64185d12273a6a3bde3ac7d0edff1e6b8d7b7b7607a4cc21104b843a0b8496cdd744d0e4edf70aad482c35327', // This is where the API key is used
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

