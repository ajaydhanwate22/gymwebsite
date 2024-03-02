import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container" style={{ backgroundColor: "grey", height: "500px", marginTop: "40px", borderRadius: '40px' }}>
        <div className="row">
          <div className="col-5" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ color: "white" }}>any query
              <br />ask me</h1>
            <p>When Mukesh is not busy coaching <br />
              many of the world’s elite, he serves <br />
              as the CEO of Evogen Nutrition, one <br />
              of </p>
            <button style={{ borderRadius: "20px" }} type="button" class="btn btn-warning">Primary</button>
            <br />
            <div style={{ marginTop: "50px" }}>
              <a style={{ color: "white", textDecoration: "none" }} href="/" > <i style={{ color: "yellow" }} class="fa-solid fa-phone"></i> +91 9876543210</a> <br />
              <a style={{ color: "white", textDecoration: "none" }} href="/" > <i style={{ color: "yellow" }} class="fa-solid fa-envelope"></i> info@dronagym.com</a> <br />
              <a style={{ color: "white", textDecoration: "none" }} href="/" > <i style={{ color: "yellow" }} class="fa-solid fa-location"></i> New delhi, India</a>
            </div>
          </div>
          <div className="col-7" style={{ marginTop: "40px" }}>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Name</label>
              <input type="name" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">E-mail</label>
              <input type="E-mail" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Phone number</label>
              <input type="phone" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button style={{ width: "100%", borderRadius: "10px" }} type="button" class="btn btn-warning btn-lg">Send Message</button>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", fontWeight: "800", fontSize: "20px", marginTop: "20px", color: "white" }}>Dronacharya</h1>
      <div style={{ display: "flex", textAlign: "center", marginLeft: "500px" }}>
        <i style={{ color: "white", marginTop: "20px" }} class=" fa-solid fa-location" />
        <h5 style={{ marginLeft: "30px", color: "red" }}>No.1376, 2nd floor, 13th Cross, Sarakki <br />
          Main Rd, 1st Phase, J. P. Nagar, Bengaluru, <br />
          Karnataka 560078</h5>
      </div>

      <h1>wgidhk  </h1>
    </>
  )
}
