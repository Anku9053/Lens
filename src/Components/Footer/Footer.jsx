import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import "./Footer.css"
const Footer = () => {
  return (
    <div style={{marginTop:"2rem",display:"flex",justifyContent:"space-between",color:"white",padding:"3rem",width:"80%",margin:"auto"}}>
        

        <div>
            <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75" alt="" />
            <p style={{height:"30px",width:"100%",marginTop:"2rem"}}>Tomorrow's Vision,Today!</p>
            <div style={{display:"flex",gap:"15px",marginTop:"2rem"}}>
                <a href=""><FaFacebook style={{height:"30px",width:"30px"}}  /></a>
                <a href=""><FaInstagram style={{height:"30px",width:"30px"}}   /></a>
                <a href=""><FaLinkedin style={{height:"30px",width:"30px"}}  /></a>
                <a href=""><FaDiscord style={{height:"30px",width:"30px"}}/></a>
                <a href=""><FaXTwitter style={{height:"30px",width:"30px"}}  /></a>
            </div>
        </div>


        <div 
        style={{fontSize:"16px",fontWeight:"600",letterSpacing:"2px",lineHeight:"3rem"}}>
            <p>SITEMAP</p>
            <p>MakeMyWeb.</p>
            <p>Products</p>
            <p>Services</p>
            <p>Blogs</p>
            <p>Life at LENS</p>

        </div>
        <div
        style={{fontSize:"16px",fontWeight:"600",letterSpacing:"2px",lineHeight:"3rem"}}>
        
            <p>CONNECT</p>
            <p>+1-517-9300-792</p>
            <p>+91-9990-736-796</p>
            <p>solutions@lenscorp.ai</p>
        </div>


    </div>
  )
}

export default Footer