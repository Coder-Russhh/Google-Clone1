"use client";

import { useEffect, useState } from "react";

const Country = () => {
  const [country, setCountry] = useState("India");

//   useEffect(() => {
//     const getCountry = async () => {
//       try {
//         const response = await fetch(
//           `https://extreme-ip-lookup.com/json/?key=XwHGhuPupEgeIDtdzPC4`
//         );
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCountry(data.country);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//         // Handle error, e.g., display a message to the user
//       }
//     };
//     getCountry();
//   }, []);
  

  return <div>{country}</div>;
};

export default Country;
