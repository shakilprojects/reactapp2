import React from "react";

const Error = () => {
    return (
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
    )
}

export default Error