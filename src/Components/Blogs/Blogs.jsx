import React from 'react';
import "./Blogs.css"

const Blogs = () => {
  return (
    <div className="mt-8">
      <div>
        <h1 className="text-white text-center text-2xl font-semibold uppercase">OUR BLOGS</h1>
      </div>
      <div className="w-20 mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-300"></div>
      <div>
        <h2 className="text-white text-center text-7xl font-semibold mt-8">Inhouse Mindscape</h2>
      </div>

      <div className="grid grid-cols-2 w-4/5 gap-8 mx-auto mt-8">
        <div className="blog-card relative">
          <div className="new-tag absolute top-0 right-0 p-2 bg-red-600 rounded-l-full">
            <span>New</span>
          </div>
          <div>
            <h2 className="mt-12 text-white text-2xl font-semibold">Generative AI</h2>
          </div>
          <div className="blog-content">
            <p className="mt-12 text-gray-500 text-lg">In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape...</p>
          </div>
        </div>
        <div className="blog-card relative">
          <div className="date-tag absolute top-0 right-0 p-2 bg-red-600 rounded-l-full">
            <span>April 25 2024</span>
          </div>
          <div>
            <h2 className="mt-12 text-white text-2xl font-semibold">The Evolution of AI in Games</h2>
          </div>
          <div className="blog-content">
            <p className="mt-12 text-gray-500 text-lg">The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 w-4/5 gap-8 mx-auto mt-8">
        <div className="blog-card relative">
          <div className="new-tag absolute top-0 right-0 p-2 bg-red-600 rounded-l-full">
            <span>April 18 2024</span>
          </div>
          <div>
            <h2 className="mt-12 text-white text-2xl font-semibold">Unmasking the Misconceptions of Artificial Intelligence in the Workplace</h2>
          </div>
          <div className="blog-content">
            <p className="mt-12 text-gray-500 text-lg">In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape...</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="explore-button inline-flex items-center bg-transparent border border-white rounded-md py-2 px-4 text-white transition-all duration-300 hover:bg-white hover:text-black">
          Explore More
          <span className="arrow ml-2">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
