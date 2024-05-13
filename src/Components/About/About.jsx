import React from 'react';
import "./About.css";
const About = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={{marginTop:"6rem"}}>
      <div className='h2'>
        <h1 className="text-white text-center text-7xl font-semibold h2">About Us</h1>
      </div>
      <div className="w-40 mx-auto mt-4 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-300"></div>

      <div className="flex-bot" style={{ borderRadius: "10px", display: "flex", background: "#1b1c1e", gridTemplateColumns: "repeat(2,1fr)", width: "80%", margin: "auto", height: "500px", marginTop: "3rem", padding: "4rem", transition: "transform 0.5s ease", transform: hovered ? "scale(0.95)" : "none" }}
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
      >
        <div>
          <div>
            <h1 className='text-white lens' style={{ fontSize: "2.8rem", fontWeight: "900", margin: "0 0 2rem" }}>Welcome to LENS</h1>
          </div>
          <div>
            <p style={{ fontSize: "1rem", fontWeight: "300", marginTop: "0.2rem", padding: "0.2rem", opacity: "0.8", width: "75%" }} className='text-white para'>We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
          </div>

          <div className='Learn_more'>
            <button
              className={`mt-4 px-6 py-3 bg-transparent border-white border text-white font-bold rounded flex items-center justify-between transition-width duration-500 ${hovered ? 'w-52' : 'w-22'}`}
             
            >
              <span className="mr-2">Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 opacity-0 transition-opacity duration-300 ${hovered ? '' : 'opacity-100'} ml-2`} viewBox="0 0 20 20" fill="currentColor" style={{ transform: hovered ? 'rotate(90deg)' : 'rotate(90deg)' }}>
                <path fillRule="evenodd" d="M7.293 6.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 9.414V16a1 1 0 01-2 0V9.414l-2.293 2.293a1 1 0 01-1.414-1.414l5-5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className='imagediv' style={{ border: "2px solid white", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "10px", transition: "0.3s", transform: hovered ? 'scale(1.1)' : 'none' }}>
          <img style={{ height: "100%", width: "100%", borderRadius: "10px", transition: "0.3s", objectFit: "cover" }} src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;
