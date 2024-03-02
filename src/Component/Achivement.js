import React from 'react'

export default function Achivement() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "yellow", }}>
                <div className="row">
                    <div className="col-6" style={{ marginTop: "42px", marginBottom:"42px" }}>
                        <img style={{ height: "500px", width: "500px", marginLeft:"60px", borderRadius:"20px" }} src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg" alt="" />
                    </div>
                    <div className="col-6" style={{ marginTop: "80px" }}>
                        <h5 style={{ color: 'black', fontWeight: '800' }}>Achievement</h5>
                        <h1 style={{ color: "black", fontWeight: '900' }}>Mr. Mukesh Gahlot have won many award </h1>
                        <p style={{ color: 'black' }}>When Mukesh is not busy coaching many of the world’s elite, he serves
                            as the CEO of Evogen Nutrition, one of the most respected brands in
                            sports nutrition. Putting his Bachelors degree in Biology with an emphasis
                            on Neurophysiology to good use.</p>

                        <div className="flex" style={{ display: 'flex', backgroundColor: "white",  marginTop:"20px", borderRadius:'20px'}}>
                            <div>
                            <i style={{fontSize:'30px', marginTop:"10px", marginLeft:"10px"}} class="fa-solid fa-award"></i>                                
                               </div>
                            <div>
                                <h1  style={{fontSize:'20px', marginLeft:'10px', marginTop:'5px'}} >National Physical Award</h1>
                                <h1 style={{fontSize:"10px", marginLeft:'10px'}}> Lorem ipsum dolor sit amet, consectetur <br />
                                    adipiscing elit, sed do eiusmod tempor</h1>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex',  marginTop:"20px", borderRadius:'20px'}}>
                            <div>
                            <i style={{fontSize:'30px', marginTop:"10px", marginLeft:"10px"}} class="fa-solid fa-award"></i>                                
                               </div>
                            <div>
                                <h1  style={{fontSize:'20px', marginLeft:'10px', marginTop:'5px'}} >National Physical Award</h1>
                                <h1 style={{fontSize:"10px", marginLeft:'10px'}}> Lorem ipsum dolor sit amet, consectetur <br />
                                    adipiscing elit, sed do eiusmod tempor</h1>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
