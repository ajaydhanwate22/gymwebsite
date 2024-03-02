import React from 'react'
import Costomer from './Costomer'

export default function Services() {
    return (
        <>
            <div style={{ marginTop: "40px" }} >
                <h5 style={{ color: "yellow", textAlign: 'center' }}>Services</h5>
                <h1 style={{ color: 'white', textAlign: "center", fontWeight: "800" }}>We provide a rage physical <br /> exercise</h1>
            </div>
            <div className="container" style={{ color: 'grey' }}>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical exercise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical exercise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical  exercise</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical exercise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical exercise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "50px", textAlign: "center" }} class="fa-solid fa-dumbbell"></i>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h5 class="card-title">Body Building</h5>
                                <p class="card-text">We provide a rage physical exercise We provide a rage physical exercise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{marginTop:"50px", color:"white", textAlign:"center"}}>
                <Costomer />
            </div>
        </>
    )
}


