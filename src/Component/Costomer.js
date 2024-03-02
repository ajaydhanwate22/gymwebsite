import React from 'react'

export default function Costomer() {
    return (
        <>
            <div>
                <h5 style={{ color: "yellow" }}>Testimonials</h5>
                <h1>What  <span style={{ color: "yellow" }}>customer</span> say  <br />about us</h1>
                <i style={{ marginRight: "600px", color: "yellow" }} class="fa-sharp fa-solid fa-quote-left"></i>
                <p style={{ marginTop: "20px", fontFamily: "cursive" }}>Our business was in chaos before we started using this Saas dashboard. We <br />
                    were drowning in data and couldnt make sense of it. Thanks to this amazing <br />
                    tool, we now have clarity, and our decision making has become precise and <br />
                    data driven.</p>
                <i style={{ marginLeft: "600px", color: "yellow" }} class="fa-sharp fa-solid fa-quote-right"></i>

                <div style={{ display: 'flex', justifyContent: "center", marginTop: "40px" }}>
                    <img style={{ height: "50px", justifyContent: "center", borderRadius: "10px " }} src="https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
                    <div style={{ marginLeft: "20px" }}>
                        <h1 style={{ fontSize: "20px", fontWeight: "800" }}>Neha sharma</h1>
                        <h1 style={{ fontSize: "15px", color: "grey" }}>Marketing Manager</h1>
                    </div>
                </div>
                <div style={{ marginBottom: "30px", marginTop: "20px" }}>
                    <button style={{ borderRadius: "50%" }}  >  <i class="fa-solid fa-arrow-right"></i></button>
                    <button style={{ borderRadius: "50%", marginLeft: "10px" }} >  <i class="fa-solid fa-arrow-left"></i></button>
                </div>
            </div>
            <h5 style={{ marginTop: "70px", color: "grey" }}>Follow Now</h5>
            <div className="container-fluid" style={{ marginTop: '30px' }} >
                <a href="https://www.facebook.com/"> <i style={{ marginRight: "100px", color: "yellow", fontSize: "30px" }} class="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com/"> <i style={{ marginRight: "50px", color: "yellow", fontSize: "30px" }} class="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/"> <i style={{ marginLeft: "50px", color: "yellow", fontSize: "30px" }} class="fa-brands fa-instagram"></i></a>
                <a href="https://www.github.com/"> <i style={{ marginLeft: "100px", color: "yellow", fontSize: "30px" }} class="fa-brands fa-github"></i></a>
            </div>
            
        </>
    )   
}
