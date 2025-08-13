import React from 'react'
import img1 from "../images/Image20.jpg"
import img2 from "../images/Images21.jpg"
import img3 from "../images/Images.25.jpg"

export default function Home() {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide-1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide-2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide-3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="slide-1" style={{ height: '550px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="slide-2" style={{ height: '550px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="slide-3" style={{ height: '550px', objectFit: 'cover' }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
 