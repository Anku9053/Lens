import React from 'react'
import "./why.css"
const Why_Us = () => {
  const calculateFontSize = () => {
    if (window.innerWidth <= 600) {
        return "45px"; 
    } else {
        return "58px"; 
    }
};

const calculatetextalign = ()=>{
  if (window.innerWidth <= 600) {
    return "left"; 
} else {
    return "center"; 
}
}

const calculategridwidth = ()=>{
  if (window.innerWidth <= 600) {
    return "30%"; 
} else {
    return "100%"; 
}
}
const initialFontSize = calculateFontSize();
const initialtextalign = calculatetextalign();
const initialgridwidth = calculategridwidth();


    return (
        <div style={{marginTop:"2rem"}}>
            <div>
                <h1 className="text-white text-center text-2xl font-semibold" style={{ textTransform: 'uppercase' }}>WHY CHOOSE LENS</h1>

            </div>
            <div className="w-32 mx-auto mt-4 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-300"></div>


            <div>
                <h2 className="ai-driven-heading" style={{ color: "white", textAlign: "center", fontSize:initialFontSize, fontStyle: "normal", fontWeight: "500", lineHeight: "normal", width: "65%", margin: "auto", marginTop: "2rem" }}>

                    AI-driven solutions backed by science
                </h2>
                <p className='ai-driven-paragraph' style={{ color: "#8a8a8a", textAlign: initialtextalign, fontSize: "20px", lineHeight: "29px", width: "60%", margin: "auto", marginTop: "2rem" }}>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
            </div>


            <div className='grid_dash_board' style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)",gap:"1rem", width:"50%", margin:"auto",marginTop:"3rem" }}>
  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>State-of-the-art solutions</span>
  </div>



  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>Lifetime support & upgrades</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>24x7 Progress Monitoring
</span>
  </div>


  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>Fast & Efficient
</span>
  </div>


  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>Plug-and-Play
</span>
  </div>


  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>No extra computation fee
</span>
  </div>



  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>Incremental Updates
</span>
  </div>



  <div style={{ display: "flex", alignItems: "center", color: "white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="NewSolutions_check__YG5PZ">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span style={{ marginLeft: "0.5rem",fontWeight:"200",fontSize:"18px",display:"flex",gap:"0.25rem",letterSpacing:"0.6px",padding:"0.25rem 1rem" }}>No licensing fee

</span>
  </div>
</div>





<div style={{width:"98%",padding:"2rem",margin:"auto",marginTop:"2rem"}}>
<div className='grid_dash_border_2' style={{width:initialgridwidth,margin:"auto",background:"transparent",display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"1rem",color:"white"}}>

    <div style={{border:"1px solid white",borderRadius:"20px",background:"#1b1c1e",padding:"2rem"}}>
        <h2 className='img_mapper' style={{fontSize:"1.5rem",fontWeight:"bolder",padding:"1rem",width:"initialgridwidth"}}>Exclusive Rights</h2>
        <img className='img_mapper2' style={{marginTop:"2rem"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75" alt="Exclusive_rights" />
        <p style={{marginTop:"1rem",marginRight:"1rem",color:"#828282"}}>
        Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.
        </p>
    </div>
   <div style={{border:"1px solid white",borderRadius:"20px",background:"#1b1c1e",padding:"2rem"}}>
                <h2 className='img_mapper' style={{fontSize:"1.5rem",fontWeight:"bolder",padding:"1rem",width:"100%"}}>Lifetime Support</h2>

        <img className='img_mapper2' style={{marginTop:"2rem"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75" alt="Exclusive_rights" />
        <p style={{marginTop:"1rem",marginRight:"1rem",color:"#828282"}}>
        Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.
        </p>
    </div>



   <div style={{border:"1px solid white",borderRadius:"20px",background:"#1b1c1e",padding:"2rem"}}>
                <h2 className='img_mapper' style={{fontSize:"1.5rem",fontWeight:"bolder",padding:"1rem",width:"100%"}}>Plug-and-Play</h2>

        <img className='img_mapper2' style={{marginTop:"4rem"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75" alt="Exclusive_rights" />
        <p style={{marginTop:"2rem",marginRight:"1rem",color:"#828282"}}>
        Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.
        </p>
    </div>



   <div style={{border:"1px solid white",borderRadius:"20px",background:"#1b1c1e",padding:"2rem"}}>
                <h2 className='img_mapper' style={{fontSize:"1.5rem",fontWeight:"bolder",padding:"1rem",width:"100%"}}>Research Driven</h2>

        <img className='img_mapper2' style={{marginTop:"2rem"}} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75" alt="Exclusive_rights" />
        <p style={{marginTop:"1rem",marginRight:"1rem",color:"#828282"}}>
        Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.
        </p>
    </div>




</div>
</div>
            </div>
    )
}

export default Why_Us