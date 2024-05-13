import React from 'react'
import "./services.css"
const Services = () => {
    const [hovered, setHovered] = React.useState(false);
    const [hovered2, setHovered2] = React.useState(false);
    const [hovered3, setHovered3] = React.useState(false);
    const [hovered4, setHovered4] = React.useState(false);
    const calculateFontSize = () => {
        if (window.innerWidth <= 600) {
            return "45px"; // Font size for screens up to 600px wide
        } else {
            return "58px"; // Default font size for larger screens
        }
    };

    const initialFontSize = calculateFontSize();
    return (
        <div style={{marginTop:"2rem"}}>
            <div>
                <h1 className="text-white text-center text-2xl font-semibold services_h1" style={{ textTransform: 'uppercase' }}>Services</h1>

            </div>
            <div className="w-40 mx-auto mt-4 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-300 services_arrow"></div>

            <div style={{ borderRadius: "10px", width: "100%", margin: "auto",marginTop:"-2rem", padding: "4rem", textAlign: "center", display: "flex", justifyContent: "center" }}>
            <h2
                className='text-white services_h2'
                style={{
                    width: "80%",
                    textAlign: "center",
                    fontSize: initialFontSize, 
                    fontStyle: "normal",
                    lineHeight: "normal",
                    marginBottom: "5rem",
                    fontWeight: "500"
                }}
            >
                We provide Artificial Intelligence Services
            </h2>
            </div>


            <div  className="grid_div_border"  style={{ borderRadius: "10px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "80%", margin: "auto", gap: "2rem", marginTop: "-9rem", padding: "4rem" }}>



                {/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}


                <div  style={{ border: hovered ? "1px solid rgb(1, 201, 155)" : "1px solid white", borderRadius: "10px", background: "#1b1c1e", padding: "2rem" }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                        <div>
                            <span style={{ marginLeft: "40px", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: "0.2", transition: "0.3s" }}>0</span>
                            <span style={{ flexShrink: "0", color: hovered ? "rgb(1, 201, 155)" : "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: hovered ? "0.2" : "1", transition: "0.3s" }}>1</span>
                        </div>
                        <div style={{ fontSize: "32px", color: hovered ? "#707070" : "rgb(1, 201, 155)", marginLeft: hovered ? "2rem" : "-1rem", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", marginTop: "35px", transition: "0.3s" }}>Biometric</div>
                    </div>
                    <div>
                        <h5 style={{ width: "80%", textAlign: "left", color: "#8a8a8a", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "32.4px" }}>Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
                    </div>
                </div>


                {/* 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}


                <div style={{ border: hovered2 ? "1px solid rgb(63, 189, 241)" : "1px solid white", borderRadius: "10px", background: "#1b1c1e", padding: "2rem" }}
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}>


                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                        <div>
                            <span style={{ marginLeft: "40px", color: "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: "0.2", transition: "0.3s" }}>0</span>
                            <span style={{ flexShrink: "0", color: hovered2 ? "rgb(63, 189, 241)" : "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: hovered2 ? "0.2" : "1", transition: "0.3s" }}>2</span>
                        </div>
                        <div style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", marginTop: "35px", transition: "0.3s", color: hovered2 ? "rgb(63, 189, 241)" : "#707070", marginLeft: hovered2 ? "2rem" : "-1rem" }}>Image Analysis</div>

                    </div>
                    <div>
                        <h5 style={{ width: "80%", textAlign: "left", color: "#8a8a8a", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "32.4px" }}>Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
                    </div>
                </div>



                {/* 33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}


                <div style={{ border: hovered3 ? "1px solid rgb(255, 96, 95)" : "1px solid white", borderRadius: "10px", background: "#1b1c1e", padding: "2rem" }}
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}>


                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                        <div>
                            <span style={{ marginLeft: "40px", color: "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: "0.2", transition: "0.3s" }}>0</span>
                            <span style={{ flexShrink: "0", color: hovered3 ? "rgb(255, 96, 95)" : "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: hovered3 ? "0.2" : "1", transition: "0.3s" }}>3</span>
                        </div>
                        <div style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", marginTop: "35px", transition: "0.3s", color: hovered3 ? "rgb(255, 96, 95)" : "#707070", marginLeft: hovered3 ? "2rem" : "-1rem" }}>Cross-Media Translation</div>

                    </div>
                    <div>
                        <h5 style={{ width: "80%", textAlign: "left", color: "#8a8a8a", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "32.4px" }}>Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
                    </div>
                </div>

                {/* 44444444444444444444444444444444444444444444444444444444444444444444444444444444 */}

                <div style={{ border: hovered4 ? "1px solid rgb(255, 159, 49)" : "1px solid white", borderRadius: "10px", background: "#1b1c1e", padding: "2rem" }}
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}>


                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                        <div>
                            <span style={{ marginLeft: "40px", color: "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: "0.2", transition: "0.3s" }}>0</span>
                            <span style={{ flexShrink: "0", color: hovered4 ? "rgb(255, 159, 49)" : "#707070", fontSize: "88px", fontStyle: "normal", fontWeight: "600", lineHeight: "123.2px", top: "35px", left: "40px", opacity: hovered4 ? "0.2" : "1", transition: "0.3s" }}>4</span>
                        </div>
                        <div style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", color: hovered4 ? "rgb(255, 159, 49)" : "#707070", marginLeft: hovered4 ? "2rem" : "-1rem", marginTop: "35px", transition: "0.3s" }}>3D Modelling and Design.</div>

                    </div>
                    <div>
                        <h5 style={{ width: "80%", textAlign: "left", color: "#8a8a8a", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "32.4px" }}>Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
                    </div>
                </div>




            </div>


        </div>
    )
}

export default Services
