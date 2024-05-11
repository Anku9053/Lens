import React from 'react';

const Video = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <video autoPlay loop>
        <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" type="video/mp4"/>
      </video>
      <div className="absolute z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">We are at the forefront of AI</h1>
        <p className="text-lg md:text-xl">
          From Conserving Wildlife to Automatically Generating Caricatures<br/>
          – <span>We Do It All</span>
        </p>
        <a href="./about">
        {/* <button className="mt-4 px-6 py-3 bg-white hover:bg-white hover:text-black hover:scale-105 text-black font-bold rounded transition-transform duration-300">Learn More</button> */}
        <button className="mt-4 px-6 py-3 bg-white hover:bg-white hover:text-black hover:scale-x-110 hover:scale-y-90 text-black font-bold rounded transition-transform duration-100">Learn More</button>

        </a>
      </div>
    </div>
  );
};

export default Video;
