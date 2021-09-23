import React from "react";

import "./App.css"
import { Link,BrowserRouter as Router  } from "react-router-dom";
function Footer(){
	return(
		<>
		<footer className="footer-section">
        <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="./pro.png" className="img-fluid" alt="logo"/>
                               </a>
							   </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span style={{color:"#0069d9"}}>Follow us</span>

                                <a href="#"><i className="fa fa-facebook-square facebook-bg" ></i></a>
                                <a href="#"><i className="fa fa-instagram twitter-bg" ></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
<Router>
<li><Link  to="/">Home</Link></li>
                                <li><Link  to="/ocr">OCR</Link></li>
                                <li><Link to="/conveter" >Convert</Link></li>
                                <li><Link to="/reducer">Reducr</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link  to="/">About us</Link></li>
</Router>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="#">Pro Converts</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>

                                <li><a href="#">Disclosure</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
		</>
	)
}

export default Footer;