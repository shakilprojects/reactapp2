import React from "react";

const Header = () => {
    return (
        <header className="row">
            <div className="col-12 px-0 top-gry">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 text-md-left">
                            <ul className="list-inline top-links">
                                <li className="list-inline-item">
                                    <a href="index.html">Home</a> <span>|</span>
                                    <a href="index.html">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-md-right col-12">
                            <ul className="list-inline top-links">
                                <li className="list-inline-item"></li>
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
                            <a href="index.html"><img src="images/logo.png" className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
