import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Service(){
	return(
		<>
		<section className="we-offer-area text-center bg-white">

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>Our <span>Servies</span></h2>
                        <h4>Play with Images</h4>
                    </div>
                </div>
            </div>
                <div className="row our-offer-items less-carousel">


                     <div className="col-md-4 col-sm-6 equal-height">
					 <Link to="/ocr" className="Link">
                        <div className="item">
                            <i className="fas fa-pen-fancy"></i>
                            <h4>Image To Text</h4>
                            <p>
                                Conver image to text and download in word file
                            </p>
                        </div>
						</Link>
                    </div>



                    <div className="col-md-4 col-sm-6 equal-height">
					<Link to="/conveter" className="Link">
                        <div className="item">
                            <i className="fas fa-dharmachakra"></i>
                            <h4>Image Convertre</h4>
                            <p>
                               Convert your image to png or jpg.
                            </p>
                        </div>
						</Link>
                    </div>

                    <div className="col-md-4 col-sm-6 equal-height">
					<Link to="/reducer" className="Link">
                        <div className="item">
                            <i className="fas fa-tasks"></i>
                            <h4>Reduce Image Size</h4>
                            <p>
                                Decrease image size.
                            </p>
                        </div>
						</Link>
                    </div>

                </div>
        </div>
    </section>
		</>
	)
}

export default Service