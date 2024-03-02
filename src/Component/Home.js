import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-6" style={{marginTop:"100px"}}>
                <h5 style={{fontSize:"20px", fontWeight:"600", color:'yellow'}}>olympid winner coach</h5>
                <h1 style={{fontSize:"40px", fontWeight:"800", color:"white"}}>Mr.mukesh gehlot <br /> will help you stay healty</h1>
                <p style={{color:"white"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, at? Quis officia, sint aspernatur dolorem ratione fuga tempore, quos suscipit error inventore enim.</p>
                <button type="button" class="btn btn-warning" style={{borderRadius:'10px'}} >Start frre trial</button>
                <button type="button" class="btn btn-light" style={{marginLeft:'10px', borderRadius:"10px"}} >Watch video</button>

            </div>
            <div className="col-6">
                <img style={{marginTop:"100px", height:"400px", borderRadius:"40px"}} src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGJvZHlidWlsZGluZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}
