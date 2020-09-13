import React from "react";

class Login extends React.Component {
    constructor(props) {
        super();

        this.loginSubmit = this.loginSubmit.bind(this);
        console.log('adf');
    }

    loginSubmit(event){
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        console.log(data);

        this.setState({loading: true});
        if (this.state.mobile !== "" || this.state.coupon !== "") {
            var postBody = {
                "coupon": this.state.coupon,
                "mobile": this.state.mobile,
                "otp": this.state.otp
            };
            this.checkCouponCode(postBody);
        }
    }

    render() {
        return (
            <div className="modal customModal" id="LoginModel" tabIndex="-1" role="dialog" aria-labelledby="LoginModel"
                 aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body py-0">
                            <div className="row align-items-end fs-18 text-center">
                                <div className="col-12 p-4 p-md-5">
                                    <h3 className="h4 fs-24 fw-400 m-0 pb-4">Enter Your Detail</h3>
                                    <form onSubmit={this.loginSubmit}>
                                    <div className="form-group py-3">
                                        <input type="number"
                                               className="form-control text-center"
                                               name="mobile"
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
                                               placeholder="Enter Code"/>
                                        <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert"
                                             style={{display: "none"}}>
                                            Error Massage
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-warning px-4"
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
        )
    }
}


export default Login