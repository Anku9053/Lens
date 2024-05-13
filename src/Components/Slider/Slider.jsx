import React from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = () => {
  return (
    <div className="slider-container">
 <div style={{ borderRadius: "10px", width: "100%", margin: "auto",marginTop:"-2rem", padding: "4rem", textAlign: "center", display: "flex", justifyContent: "center" }}>
                <h2 className='text-white' style={{ width: "80%", textAlign: "center", fontSize: "35px", fontStyle: "normal", lineHeight: "normal", marginBottom: "5rem", fontWeight: "500" }}>
                We Work With Amazing Clients
                </h2>
            </div>

      <div className="slider">
        
        <div className="black-screen"></div>
        
        {/* Images */}
        <div className="slide" >
          <img style={{height:"25%"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlobal_white.7630bd08.png&w=256&q=75" alt="Image 1" />
        </div>
        <div className="slide">
          <img style={{height:"25%"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=256&q=75" alt="Image 2" />
        </div>
        <div className="slide">
          <img style={{height:"25%"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCore_white.8ba066be.png&w=256&q=75" alt="Image 3" />
        </div>
        <div className="slide">
          <img style={{height:"25%"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrove.f0ee63ad.png&w=128&q=75" alt="Image 4" />
        </div>

        {/* Black screen at the end */}
        <div className="black-screen"></div>

      </div>


<div style={{background:"#242424",padding:"2rem",marginTop:"6rem"}}>
<div>
    <h2 className='text-white' style={{width: "100%", textAlign: "center", fontSize: "35px", fontStyle: "normal", lineHeight: "normal", marginBottom: "5rem", fontWeight: "500" }}>By the numbers</h2>
</div>
      <div style={{color:"white",background:"#242424", display:"flex", gridTemplateColumns:"repeat(3,1fr)", width:"100%", margin:"auto", justifyContent:"center", gap:"7rem",padding:"2rem"}}>
    <div style={{borderRight: "2px solid white",padding:"2rem"}}>
        <span style={{textAlign:"center", fontSize:"40px", fontWeight:"600"}}>15+</span>
        <p style={{color:"white", textAlign:"center", fontSize:"18px"}}>Solutions for <br/>Global crises</p>
    </div>
    <div style={{borderRight: "2px solid white",padding:"2rem"}}>
        <span style={{textAlign:"center",marginRight:"4rem", fontSize:"40px", fontWeight:"600"}}>10+</span>
        <p style={{color:"white",marginRight:"4rem", textAlign:"center", fontSize:"18px"}}>University <br/>Collaborations</p>
    </div>
    <div style={{ padding: "2rem"}}>
        <span style={{textAlign:"center", fontSize:"40px", fontWeight:"600"}}>25+</span>
        <p style={{color:"white", textAlign:"center", fontSize:"18px"}}>Employees <br/>Worldwide</p>
    </div>
</div>
</div>

    </div>
  );
};

export default Slider;
