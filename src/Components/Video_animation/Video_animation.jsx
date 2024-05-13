import React from 'react'
import "./Video_animation.css"
const Video_animation = () => {
    return (
        <div style={{marginTop:"10rem", background: "linear-gradient(to bottom, transparent 45%, #242424 0%, #242424 55%, transparent 55%)" }}>
          <div style={{backgroundColor:"#242424", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" }}>
            <div>
              <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75" alt="" />
            </div>
            <div style={{ margin: "auto" }}>
              <h2 style={{ display: "flex", alignItems: "center", fontSize: "64px", fontWeight: "700", textTransform: "capitalize", marginBottom: "20px",color:"white" ,gap:"20px"}}>
                Meet <span  className="animation-text">Tru-AI</span>
              </h2>
              <p style={{color:"white",fontSize:"26px",fontWeight:"500",lineHeight:"normal"}}>Design. Create. Deploy.</p>
              <p className='animation-text' style={{fontSize:"20px",fontWeight:"400"}}>the Future of AI | Power to EDIT</p>
              <p style={{color:"white",textAlign:"center",fontSize:"14px",textTransform:"capitalize"}}>Based On Your Website & Traffic Trends, Tru-AI Optimises Your <br /> Website</p>
            </div>
            <div style={{position: "relative", overflow: "hidden", borderRadius: "30px", clipPath: "inset(0 10% 0 0)" }}>
    <video style={{ width: "100%", borderRadius: "100px", position: "absolute", top: "5rem", left: "3rem" }} src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"></video>
</div>



          </div>
        </div>
      );
    };
    
    export default Video_animation;