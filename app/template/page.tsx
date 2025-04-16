import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-2 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">
        Top School Dashboard
      </h1>
      <div className="w-full max-w-4xl aspect-square sm:aspect-[16/8] rounded-lg shadow-lg overflow-hidden">
        <video
          src="./template.mp4"
          controls
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Page;
