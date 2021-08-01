import React from 'react';
import img1 from './../img/banner-images/tv.png';
import img2 from './../img/banner-images/headphone.png';
import img3 from './../img/banner-images/xbox.png';

const Slider = () => {
    return (
        <div className='pink_bg'>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide pink_bg" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <h1>MI Mega LCD TV</h1>
                                    <p>This is a great tv of the world . you can buy it for your happiness . it is very very great . lorem ipsum dolor sit amet lorem lorem muneem muneem muneem hussain hussain</p>
                                    <h1 className="banner_price">$1200</h1>
                                    <button className="buy_now_btn">EXPLORE </button>
                                </div>
                                <div className="col-md-5"><img src={img1} className="d-block w-100" alt="" /></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <h1>Cool dude headphone</h1>
                                    <p>This is a great headphone of the world . you can buy it for your happiness . it is very very great . lorem ipsum dolor sit amet lorem lorem muneem muneem muneem hussain hussain</p>
                                    <h1 className="banner_price">$400</h1>
                                    <button className="buy_now_btn">EXPLORE</button>
                                </div>
                                <div className="col-md-5"><img src={img2} className="d-block w-100" alt="..." /></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <h1>X-Box Ultra </h1>
                                    <p>This is a great machine of the world . you can buy it for your happiness . it is very very great . lorem ipsum dolor sit amet lorem lorem muneem muneem muneem hussain hussain</p>
                                    <h1 className="banner_price">$600</h1>
                                    <button className="buy_now_btn">EXPLORE</button>
                                </div>
                                <div className="col-md-5"><img src={img3} className="d-block w-100" alt="..." /></div>
                            </div>
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
            </div>
        </div>
    );
};

export default Slider;