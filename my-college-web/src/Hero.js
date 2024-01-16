import React from "react";
import CarouselImage1 from "../src/img/carousel-1.png";
import CarouselImage2 from "../src/img/carousel-2.png";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const hero = () => {
    return (
        <div className="container-fluid px-0 mb-5">
            <div
                id="header-carousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 img-fluid" src={CarouselImage1} alt="Image" />
                        <div className="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-start">
                                        <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">
                                            25 Years of Working Experience
                                        </p>
                                        <h1 class="display-1 text-white mb-5 animated slideInRight">
                                            Industrial Solution Providing Company
                                        </h1>
                                        <a
                                            href=""
                                            class="btn btn-primary py-3 px-5 animated slideInRight"
                                        >
                                            Explore More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 img-fluid" src={CarouselImage2} alt="Image" />
                        <div className="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-start">
                                        <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 Years
                                            of Working Experience</p>
                                        <h1 class="display-1 text-white mb-5 animated slideInRight">The Best Reliable
                                            Industry Solution</h1>
                                        <a href="" class="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      
    );
};

export default hero;
