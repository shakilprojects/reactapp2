import React from "react";

const Catalogue = () => {
    return (
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
    )
}

export default Catalogue