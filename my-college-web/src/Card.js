import React from "react";
import ClassImage_1 from "../src/img/class-1.jpg";
import ClassImage_2 from "../src/img/class-2.jpg";
import ClassImage_3 from "../src/img/class-3.jpg";
import Section_image from "../src/img/event-left.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./card.css";



const Card = () => {
    return (
        <div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Popular Classes</span>
                        </p>
                        <h1 className="mb-4">Classes for Your Kids</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_1} alt="ClassImage_1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Drawing Class</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>

                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_2} alt="ClassImage_2" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Language Learning</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>

                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_3} alt="ClassImage_3" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Basic Science</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>

                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_1} alt="ClassImage_1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Drawing Class</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>

                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_2} alt="ClassImage_2" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Language Learning</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>

                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={ClassImage_3} alt="ClassImage_3" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Basic Science</h4>
                                    <p className="card-text">
                                        Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                                        ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                                    </p>
                                </div>
                                <a href="" className="btn btn-primary px-4 mx-auto mb-4">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Header  */}

            <section class="events section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 col-12">
                            <div class="section-title bg">
                                <h2>Upcoming <span>Events</span></h2>
                                <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy</p>
                                <div class="icon"><i class="fa fa-paper-plane"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-12">
                            <div class="event-img">
                                <img src={Section_image} alt="Section_image" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-12">
                            <div class="coming-event">

                                <div class="single-event">
                                    <div class="event-date">
                                        <p>23<span>March</span></p>
                                    </div>
                                    <div class="event-content">
                                        <h3 class="event-title"><a href="event-single.html">Admission Fair Spring 2019</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
                                        <span class="entry-date-time"><i class="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
                                    </div>
                                </div>

                                <div class="single-event">
                                    <div class="event-date">
                                        <p>25<span>April</span></p>
                                    </div>
                                    <div class="event-content">
                                        <h3 class="event-title"><a href="event-single.html">Internation Web Developments Awards!</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
                                        <span class="entry-date-time"><i class="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
                                    </div>
                                </div>


                                <div class="single-event">
                                    <div class="event-date">
                                        <p>05<span>Jun</span></p>
                                    </div>
                                    <div class="event-content">
                                        <h3 class="event-title" ><a href="event-single.html">Actualized Network Seminar</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
                                        <span class="entry-date-time"><i class="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Card;  