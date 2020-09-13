import React from "react";

const Otp = () => {
    return (
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
    )
}

export default Otp