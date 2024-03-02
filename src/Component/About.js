import React from 'react'

export default function About() {
  return (
    <>

      <div className="container"  >
        <div className="row">
          <div className="col-6" style={{marginTop:"60px"}}>
            <h1 style={{ color: 'white', fontSize:"20px",fontWeight:'800' }}>About</h1>
            <h1 style={{ color: "white", fontSize:"30px",fontWeight:'800' }}>Mr. mukesh gehlot have <br /> won many award</h1>
            <p style={{ color: "white", fontSize:"13px",fontWeight:'500' }}>When Mukesh is not busy coaching many of the world’s elite, he serves as the CEO of
              Evogen Nutrition, one of the most respected brands in sports nutrition. Putting his
              Bachelors degree in Biology with an emphasis on Neurophysiology to good use,
              Evogen Nutrition has been experiencing rapidly growing popularity.</p>
            <div style={{ color: 'white'  }}>
              <h5 style={{fontSize:"12px", fontWeight:"500"}}> <i class="fa-solid fa-check"></i> Learn from customer feedback</h5>
              <h5 style={{fontSize:"12px", fontWeight:"500"}}> <i class="fa-solid fa-check"></i> Learn from customer feedback</h5>
              <h5 style={{fontSize:"12px", fontWeight:"500"}}> <i class="fa-solid fa-check"></i>Learn from customer feedback</h5>
              <h5 style={{fontSize:"12px", fontWeight:"500"}}> <i class="fa-solid fa-check"></i>Learn from customer feedback</h5>
              <h5 style={{fontSize:"12px", fontWeight:"500"}}> <i class="fa-solid fa-check"></i>Learn from customer feedback</h5>

            </div>
            <button type="button" class="btn btn-warning" style={{ borderRadius: "20px",  marginTop:"20px"}}>Start free trial</button>
          </div>
          <div className="col-6">
            <img style={{ marginTop: "50px", height: "500px", width: "500px", borderRadius: '20px' }} src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-gorak-1229356.jpg&fm=jpg" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
