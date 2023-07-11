// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


import axios from 'axios';

export async function fetcher(url, options = {}) {
  try {
    const response = await axios(url, options);
    const data = response.data;
    return data;
  } catch (error) {
    // Handle error
    console.error('Request failed:', error.message);
    throw error;
  }
}
