import React from 'react';
import "./Blogs.css"
const Blogs = () => {
  return (
    <div style={{marginTop:"2rem"}}>
      <div>
        <h1 className="text-white text-center text-2xl font-semibold" style={{ textTransform: 'uppercase' }}>OUR BLOGS</h1>
      </div>
      <div className="w-20 mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-300"></div>
      <div>
        <h2 style={{ color: "white", textAlign: "center", fontSize: "58px", fontStyle: "normal", fontWeight: "500", lineHeight: "normal", width: "65%", margin: "auto", marginTop: "2rem" }}>
          Inhouse Mindscape
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "65%", gap: "2rem", margin: "auto",marginTop:"4rem" }}>
        <div className="blog-card">
          <div className="new-tag">
            <span>New</span>
          </div>
          <div>
            <h2 style={{marginTop:"3rem", color: "white", fontSize: "28px", fontWeight: "500", lineHeight: "36px", letterSpacing: "1px" }}>Generative AI</h2>
          </div>
          <div className="blog-content">
            <p style={{marginTop:"3rem", color: "#828282", fontSize: "16.5px" }}>In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape...</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="date-tag">
            <span>April 25 2024</span>
          </div>
          <div>
            <h2 style={{marginTop:"3rem", color: "white", fontSize: "28px", fontWeight: "500", lineHeight: "36px", letterSpacing: "1px" }}>The Evolution of AI in Games</h2>
          </div>
          <div className="blog-content">
            <p style={{marginTop:"3rem", color: "#828282", fontSize: "16.5px" }}>The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", width: "65%", gap: "2rem", margin: "auto",marginTop:"2rem" }}>
        <div className="blog-card">
          <div className="new-tag">
            <span>April 18 2024</span>
          </div>
          <div>
            <h2 style={{marginTop:"3rem", color: "white", fontSize: "28px", fontWeight: "500", lineHeight: "36px", letterSpacing: "1px" }}>Unmasking the Misconceptions of Artificial Intelligence in the Workplace
</h2>
          </div>
          <div className="blog-content">
            <p style={{marginTop:"3rem", color: "#828282", fontSize: "16.5px" }}>In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape...</p>
          </div>
        </div>
       
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <button
    style={{
      padding: "10px 20px",
      borderRadius: "10px",
      border: "1px solid white",
      backgroundColor: "transparent",
      color: "white",
      fontSize: "18px",
      marginTop: "4rem",
      transition: "padding 0.3s",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer" /* Ensure cursor changes on hover */
    }}
    className="explore-button"
  >
    Explore More
    <span className="arrow" style={{ marginLeft: "5px" }}>&#8594;</span> {/* Right arrow */}
  </button>
</div>


    </div>
  );
}

export default Blogs;
