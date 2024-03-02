import React from 'react'

export default function Award() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6" style={{ marginTop: "190px" }}>
                        <h5 style={{ color: "white", fontSize: "15px", color: "yellow" }}>location</h5>
                        <h1 style={{ color: "white", fontWeight: '800' }}>Mr Mukesh Gehlot have <span style={{ color: "yellow" }}>won</span> many award</h1>
                        <p style={{ color: "white", fontFamily: "cursive" }}>When Mukesh is not busy coaching many of the
                            world’s elite, he serves as the CEO of Evogen Nutrition,
                            one of the most respected brands in sports nutrition.
                            Putting his Bachelors degree in Biology with an
                            emphasis on Neurophysiology to good use, Evogen
                            Nutrition has been experiencing rapidly growing
                            popularity.</p>

                    </div>
                    <div className="col-6" style={{ marginTop: '100px' }}>
                        <img style={{ height: "400px", width: "300px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVWEUvPgMsmen50achqqeZOAQiQ9RWUrGGJWS41sVB2iYN2gfaxgy2Ku-c_4J4fMZ-50&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <div className="container d-flex" style={{justifyContent:"space-between", marginTop:"50px"}} >
                <div className="global_customer-1" style={{display:"flex", backgroundColor:"yellow", borderRadius:"10px", width:"200px", height:"70px"}}>
                <i style={{fontSize:"40px", marginTop:"15px", marginLeft:"20px"}} class="fa-sharp fa-regular fa-globe"></i>
                <h1 style={{fontSize:"15px", marginLeft:"30px" ,marginTop:"15px", fontWeight:"800"}}>Global <br /> Customer</h1>    

                </div>
                <div className="global_customer-1" style={{display:"flex", backgroundColor:"grey", borderRadius:"10px", width:"200px", height:"70px"}}>
                <i style={{fontSize:"40px", marginTop:"15px", marginLeft:"20px"}} class="fa-sharp fa-regular fa-globe"></i>
                <h1 style={{fontSize:"15px", marginLeft:"30px" ,marginTop:"15px", fontWeight:"800"}}>Global <br /> Customer</h1>    

                </div>
                <div className="global_customer-1" style={{display:"flex", backgroundColor:"grey", borderRadius:"10px", width:"200px", height:"70px"}}>
                <i style={{fontSize:"40px", marginTop:"15px", marginLeft:"20px"}} class="fa-sharp fa-regular fa-globe"></i>
                <h1 style={{fontSize:"15px", marginLeft:"30px" ,marginTop:"15px", fontWeight:"800"}}>Global <br /> Customer</h1>    

                </div>
                <div className="global_customer-1" style={{display:"flex", backgroundColor:"grey", borderRadius:"10px", width:"200px", height:"70px"}}>
                <i style={{fontSize:"40px", marginTop:"15px", marginLeft:"20px"}} class="fa-sharp fa-regular fa-globe"></i>
                <h1 style={{fontSize:"15px", marginLeft:"30px" ,marginTop:"15px", fontWeight:"800"}}>Global <br /> Customer</h1>    

                </div>  
            </div>
        </>
    )
}
