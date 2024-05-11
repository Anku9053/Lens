import React from 'react'

const Map = () => {
  return (
    <div style={{marginTop:"5rem"}}>
        <div style={{display:"grid",height:"600px",gridTemplateColumns:"repeat(2,1fr)",background:"#242424"}}>

            <div style={{padding:"3rem"}}>
                <div>
                <h2 style={{color:"white",fontWeight:"600",fontSize:"64px",lineHeight:"66px",width:"70%"}}>
                Get in <br></br> touch with <br />us

                </h2>
                </div>

<div>

                <p style={{color:"white",fontSize:"20px"}}>Send your enquiry now!</p>
</div>
            </div>
            <div style={{padding:"2rem",background:"#000000"}}>
                <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMap.1a735ef7.png&w=750&q=75" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Map