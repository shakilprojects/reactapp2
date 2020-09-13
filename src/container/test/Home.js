import React from 'react';

function Home(){
    return (
        <div>

            <body className="teachers-day">
            <div className="container-fluid">
                <header className="row">
                    <div className="col-12 px-0 top-gry">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-md-6 text-md-left">
                                    <ul className="list-inline top-links">
                                        <li className="list-inline-item">
                                            <a href="index.html">Home</a> <span>|</span>
                                            <a href="index.html">Contact us</a> <span>|</span> +(91) 85 1000 4444
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 text-md-right col-12">
                                    <ul className="list-inline top-links">
                                        <li className="list-inline-item">Welcome to GyFTR.com!</li>
                                        <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 px-0 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center center-logo">
                                    <a href="index.html"><img src="images/GyFTR-Logo.png" className="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="row mainSection">
                    <div className="col-12 col-md-5 px-0">
                        <img src="images/Left_image_desktop.png" alt="babber" className="w-100 d-none d-md-block"/>
                            <img src="images/top_image_mobile.png" alt="babber" className="w-100 d-block d-md-none "/>
                    </div>

                    <div className="col-12 col-md-7 pt-3">
                        <div className="row">
                            <div className="col-12 col-lg-11">
                                <div className="row px-2">

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="one" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/1.png" alt="EXCEL" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Excel</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="two" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/2.png" alt="Negotiation skills" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Negotiation skills</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-12 p-2 QuickSMSMobile" style={{display:"none"}}>
                                        <div className="bg-white p-4 shadow-sm rounded">
                                            <div className="row">
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Name" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Mobile Number" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Email ID" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4">
                                                    <select className="form-control">
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 pb-4"><textarea className="form-control bg-light p-2 border-0" placeholder="Type your own Message" rows="3"></textarea></div>
                                                <div className="col-12 text-center"><button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal" data-target="#thanksModel">SUBMIT</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="three" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/3.png" alt="Team Management" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Team Management</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-12 p-2 QuickSMS" style={{display:"none"}}>
                                        <div className="bg-white p-4 shadow-sm rounded">
                                            <div className="row">
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Name" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Mobile Number" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Email ID" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4">
                                                    <select className="form-control">
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 pb-4"><textarea className="form-control bg-light p-2 border-0" placeholder="Type your own Message" rows="3"></textarea></div>
                                                <div className="col-12 text-center"><button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal" data-target="#thanksModel">SUBMIT</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="four" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/4.png" alt="Leadership Skills" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Leadership Skills</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-12 p-2 QuickSMSMobile2" style={{display:"none"}}>
                                        <div className="bg-white p-4 shadow-sm rounded">
                                            <div className="row">
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Name" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Mobile Number" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Email ID" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4">
                                                    <select className="form-control">
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 pb-4"><textarea className="form-control bg-light p-2 border-0" placeholder="Type your own Message" rows="3"></textarea></div>
                                                <div className="col-12 text-center"><button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal" data-target="#thanksModel">SUBMIT</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="five" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/5.png" alt="Partner Management" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Partner Management</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-6 col-md-4 p-2">
                                        <a href="javascript:void(0)" id="six" className="d-block bg-white p-2 p-md-3 text-dark shadow-sm rounded">
                                            <figure className="m-0 text-center">
                                                <img src="images/6.png" alt="Presentation skills" className="w-100"/>
                                                    <figcaption className="m-0 pt-2 pt-md-3 text-nowrap">Presentation skills</figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-12 p-2 QuickSMS2 QuickSMSMobile3" style={{display:"none"}}>
                                        <div className="bg-white p-4 shadow-sm rounded">
                                            <div className="row">
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Name" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Mobile Number" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4"><input type="text" className="form-control" placeholder="Enter your mentor’s Email ID" name="" /></div>
                                                <div className="col-12 col-md-6 pb-4">
                                                    <select className="form-control">
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                        <option>Select Your Message</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 pb-4"><textarea className="form-control bg-light p-2 border-0" placeholder="Type your own Message" rows="3"></textarea></div>
                                                <div className="col-12 text-center"><button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal" data-target="#thanksModel">SUBMIT</button></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-lg-11 text-right">
                                <img src="images/desktop-bot.png" alt="babber" className="d-none d-md-inline-block"/>
                                    <img src="images/bottom_image_mobile.png" alt="babber" className="w-100 d-block d-md-none "/>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="row footer-arya">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-block d-md-none">
                                <a href="avascript:void(0)" className="backToTop">Back to top</a>
                            </div>

                            <div className="col-12 pb-3">
                                <ol className="footerVerticalLinks">
                                    <li className="footerVerticalLinks-item">CATEGORY</li>
                                    <li className="footerVerticalLinks-item"><a href="#">Apparel &amp; Accessories</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Food &amp; Beverage</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Mobile &amp; Electronics</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Health &amp; Wellness</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Movie &amp; Magazines</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Cabs &amp; Travel</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">e-Com &amp; Online</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Grocery &amp; Home Needs</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Apparel &amp; Accessories</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Food &amp; Beverage</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Mobile &amp; Electronics</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Health &amp; Wellness</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Movie &amp; Magazines</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Cabs &amp; Travel</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">e-Com &amp; Online</a></li>
                                    <li className="footerVerticalLinks-item"><a href="#">Grocery &amp; Home Needs</a></li>
                                </ol>
                            </div>
                            <div className="col-12 pb-4">
                                <ol className="footerVerticalLinks">
                                    <li className="footerVerticalLinks-item">BRANDS</li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">ALDO</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Allen Solly</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Armani Exchange</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Arrow</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">BEBE</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Bata</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Benetton</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Central</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Club SP</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Coach</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Elle</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Fastrack</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Flying Machine</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Baskin Robbins</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Cafe Coffee Day Online</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Costa Coffee</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">KFC</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Machaan</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Mainland China</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">ALDO</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Allen Solly</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Armani Exchange</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Arrow</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">BEBE</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Bata</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Benetton</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Central</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Club SP</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Coach</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Elle</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Fastrack</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Flying Machine</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Baskin Robbins</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Cafe Coffee Day Online</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Costa Coffee</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">KFC</a></li>
                                    <li className="footerVerticalLinks-item"><a href="brand.html">Machaan</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid br-b-1 br-t-1 bg-fbfbfb br-color-light pt-4 pb-4">
                        <div className="row">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col-lg-8">
                                        <div className="row align-items-end">
                                            <div className="col-md-6 pr-lg-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h5 className="m-0 fs-16">Subscribe</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <form className="DownloadSMSform subscribeForm">
                                                            <div className="d-block w-100">
                                                                <ul className="list-inline customNewCheck br-0 m-0 p-0 py-1">
                                                                    <li className="list-inline-item">
                                                                        <input type="checkbox" id="OffersCheck"/>
                                                                            <label for="OffersCheck">Offers</label>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <input type="checkbox" id="BrandsCheck"/>
                                                                            <label for="BrandsCheck">Brands</label>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <input type="checkbox" id="allCheck"/>
                                                                            <label for="allCheck">All</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="formFild mt-1">
                                                                <input type="text" className="form-control" id="" placeholder="E-Mail"/>
                                                                    <button className="btn btn-outline-dark">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 pl-lg-5 mt-3 mt-md-0">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h5 className="m-0 fs-16">Download</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <ul className="list-inline br-0 m-0 p-0 pt-1 pb-2 DownloadAppNew">
                                                            <li className="list-inline-item">
                                                                <a href="#"></a><a href="#"><img src="images/apple-icon.png" alt=""/></a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="#"><img src="images/pl.png" alt=""/></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12">
                                                        <form className="DownloadSMSform">
                                                            <div className="formFild mt-1">
                                                                <input type="text" className="form-control" id="" placeholder="Download via SMS"/>
                                                                    <button className="btn btn-outline-dark">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col collepsMobileOne">
                                        <h4>ABOUT</h4>
                                        <ul className="footer-linke">
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Blogs</a></li>
                                            <li><a href="#">Press</a></li>
                                        </ul>
                                    </div>
                                    <div className="col collepsMobileTwo">
                                        <h4>CUSTOMER CARE</h4>
                                        <ul className="footer-linke">
                                            <li><a href="#">Helpline 1800419915</a></li>
                                            <li><a href="#">Request a Call Back</a></li>
                                            <li><a href="mailto:help@gyftr.com">help@gyftr.com</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Program T&amp;C</a></li>
                                        </ul>
                                    </div>
                                    <div className="col collepsMobileThree">
                                        <h4>MY ACCOUNT</h4>
                                        <ul className="footer-linke">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">My Transactions</a></li>
                                            <li><a href="#">My Profile</a></li>
                                            <li><a href="#">About BPCL PetroMiles</a></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-sm-12 collepsMobileFour">
                                                <h4>SOCIAL</h4>
                                                <ul className="list-inline footer-social">
                                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid br-t-1 pt-md-3 mt-md-3">
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center text-lg-right mt-2 mt-lg-0">
                                        <ul className="payment-logos">
                                            <li className="visa">Visa</li>
                                            <li className="mastercard">MasterCard</li>
                                            <li className="american-express">American Express</li>
                                            <li className="diners-club">Diners Club</li>
                                            <li className="rupay">Rupay</li>
                                            <li className="EMIOptions">EMI Options</li>
                                            <li className="NetBanking">Net Banking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid footerLast">
                        <div className="row">
                            <div className="container">
                                <div className="row align-items-center text-center">
                                    <div className="col-12 col-md-8 text-md-left">© 2016. Vouchagram India Pvt. Ltd <span className="pr-2 pl-2">|</span> <a href="#">Privacy Policy</a><span className="pr-2 pl-2">|</span><a href="#">Terms of Use</a> </div>
                                    <div className="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                                        <div className="d-inline-block">
                                            <span className="d-inline-block mt-2 mr-2">Powered by</span>
                                            <a href="https://www.gyftr.com/" target="_blank" className="float-right"><img src="images/footer-logo.png" alt="GyFtr"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


            <div className="modal customModal" id="LoginModel" tabindex="-1" role="dialog" aria-labelledby="LoginModel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body py-0">
                            <div className="row align-items-end fs-18 text-center">
                                <div className="col-12 p-4 p-md-5">
                                    <h3 className="h4 fs-24 fw-400 m-0 pb-4">Enter Your Detail</h3>
                                    <div className="form-group py-3">
                                        <input type="number" className="form-control text-center" name="" placeholder="Enter Your Mobile Number"/>
                                            <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert" style={{display:"none"}}>
                                                Error Massage
                                            </div>
                                    </div>
                                    <div className="form-group py-3">
                                        <input type="email" className="form-control text-center" name="" placeholder="Enter Code"/>
                                            <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert" style={{display:"none"}}>
                                                Error Massage
                                            </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal" data-target="#otpModel">SEND OTP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal customModal" id="otpModel" tabindex="-1" role="dialog" aria-labelledby="otpModel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body py-0">
                            <div className="row align-items-end fs-18 text-center">
                                <div className="col-12 p-4 p-md-5">
                                    <h3 className="h4 fs-24 fw-400 m-0 pb-4">Enter Your Detail</h3>
                                    <div className="form-group py-2">
                                        <input type="number" className="form-control text-center" name="" value="9910448595"/>
                                            <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert" style={{display:"none"}}>
                                                Error Massage
                                            </div>
                                    </div>
                                    <div className="form-group py-2">
                                        <input type="email" className="form-control text-center" name="" value="AXCE123"/>
                                            <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert" style={{display:"none"}}>
                                                Error Massage
                                            </div>
                                    </div>
                                    <div className="form-group py-2">
                                        <input type="email" className="form-control text-center" name="" placeholder="Enter OTP"/>
                                            <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert" style={{display:"none"}}>
                                                Error Massage
                                            </div>
                                            <div className="text-right fs-12 ">
                                                <a href="#" className="text-dark">Resend OTP</a>
                                            </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-warning px-4" data-dismiss="modal" data-toggle="modal">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal customModal" id="thanksModel" tabindex="-1" role="dialog" aria-labelledby="thanksModel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body py-0">
                            <div className="row align-items-end fs-18 text-center py-5">
                                <div className="col-12 p-5">
                                    <div>
                                        <img src="images/thanks.png"/>
                                    </div>
                                    <p className="pt-3 fw-400">Your Gift Voucher will be sent to your mentor within 10 mins.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal customModal" id="sorryModel" tabindex="-1" role="dialog" aria-labelledby="sorryModel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body py-0">
                            <div className="row align-items-end fs-18 text-center py-2">
                                <div className="col-12 p-5">
                                    <div className="pb-3">
                                        <img src="images/opps.png"/>
                                    </div>
                                    <h4>Oops!</h4>
                                    <p className="fw-400">Seems you have already sent the Gift Voucher to your mentor!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>
        </div>
)

}

export default Home

