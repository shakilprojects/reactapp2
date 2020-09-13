import React from "react";
import axios from "axios";

const Login = () => {
    const initialFormData = {
        mobile: "",
        coupon: ""
    };

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
        var bodyFormData = new FormData();
        bodyFormData.append('mobile', formData.mobile);
        bodyFormData.append('coupon', formData.coupon);

        axios({
            method: 'post',
            url: 'https://api.gyftr.net/gyftradmindev/api/v1/calendar/wish',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    const updateField = e => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
        <div className="modal customModal" id="LoginModel" tabIndex="-1" role="dialog" aria-labelledby="LoginModel"
             aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body py-0">
                        <div className="row align-items-end fs-18 text-center">
                            <div className="col-12 p-4 p-md-5">
                                <h3 className="h4 fs-24 fw-400 m-0 pb-4">Enter Your Detail</h3>
                                <form onSubmit={handleSubmit}>
                                <div className="form-group py-3">
                                    <input type="number"
                                           className="form-control text-center"
                                           name="mobile"
                                           onChange={updateField}
                                           placeholder="Enter Your Mobile Number"/>
                                    <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert"
                                         style={{display: "none"}}>
                                        Error Massage
                                    </div>
                                </div>
                                <div className="form-group py-3">
                                    <input type="email"
                                           className="form-control text-center"
                                           name="coupon"
                                           onChange={updateField}
                                           placeholder="Enter Code"/>
                                    <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert"
                                         style={{display: "none"}}>
                                        Error Massage
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-warning px-4"
                                            onClick={handleSubmit}
                                            data-dismiss="modal"
                                            data-toggle="modal"
                                            data-target="#otpModel">SEND OTP
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Login