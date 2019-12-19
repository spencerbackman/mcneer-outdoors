import React, { useEffect } from 'react'
import img from '../../assets/images/gutters2.jpg';
import img2 from '../../assets/images/gutters3.jpg';
import img3 from '../../assets/images/gutters4.jpg';
import Carousel from '../../components/Carousel';
import '../../assets/css/services.css';

function Gutters() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <h1 className="service-header">
                Gutters
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3
                    ]} />
            </div>
            <div className="service-section">

                <p className="service-par">
                    When you’re putting in a new patio, you shouldn’t have to phone a different contractor for each piece of the job: one for the concrete work, another for gutters for water runoff.
                </p>
                <p className="service-par">
                    Professional Lawn Care includes both concrete work and guttering in our lawn care services.
                </p>
                <p className="service-par">
                    Whether your guttering job is part of a complete landscaping package or patio installation or a repair or addition to your existing structure – one call is all it takes.
                </p>

            </div>
        </div>
    )
}

export default Gutters;