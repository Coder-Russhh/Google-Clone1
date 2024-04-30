"use client";

import { useEffect } from "react";

const error = ({error, reset}) => {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong!</h1>
      {/* <h1 className='text-3xl mb-4'>
          No results found for {error}
        </h1> */}
      <button className="text-blue-500">Try again</button>
    </div>
  );
};

export default error;
