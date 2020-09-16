import React from "react";
import axios from "axios";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile:'',
            coupon:'',
            submitted:false,
            error:false,
            errorMessage:'',
            successMessage:'',
            responseData:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        }, () => {
                console.log('state changed '+this.state.submitted);
        });
        // alert('An form submitted: ' + this.state.submitted);
        ///api call here
        this.fetchData();
    }


    fetchData() {
        const formData = new FormData();
        formData.append('mobile', this.state.mobile);
        formData.append('coupon', this.state.coupon);
        axios({
            method: 'post',
            url: 'https://api.gyftr.net/gyftradmindev/api/v1/calendar/wish',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(response => {
                if(response.data.data.code != 200){
                    this.setState({
                        error:true,
                        errorMessage:response.data.data.message
                    });
                }else{
                    this.setState({
                        data:response.data.data
                    });
                }
            })
            .catch(error => {
                // console.log(error)
                this.setState({
                    error:true,
                    errorMessage:'Something went wrong!'
                });
            })
    }


    render() {
        const formResponse = this.state;
        let errorDisplay = null;
        if(this.state.errorMessage){
            errorDisplay = <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert"
                                    style={{display: "block"}}>
                {this.state.errorMessage}
            </div>
        }
        return (
            <>
                <div className="modal customModal" id="LoginModel" tabIndex="-1" role="dialog"
                     aria-labelledby="LoginModel"
                     aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog transparentModal modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body py-0">
                                <div className="row align-items-end fs-18 text-center">
                                    <div className="col-12 p-4 p-md-5">
                                        <h3 className="h4 fs-24 fw-400 m-0 pb-4">Enter Your Detail</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group py-3">
                                                <input type="number"
                                                       className="form-control text-center"
                                                       name="mobile"
                                                       onChange={this.handleChange}
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
                                                       onChange={this.handleChange}
                                                       placeholder="Enter Code"/>
                                                <div className="alert alert-danger m-0 px-2 py-1 fs-14" role="alert"
                                                     style={{display: "none"}}>
                                                    Error Massage
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-warning px-4"
                                                        onClick={this.handleSubmit}
                                                        // data-dismiss="modal"
                                                        // data-toggle="modal"
                                                        data-backdrop="static"
                                                        // data-target="#otpModel"
                                                    >SEND OTP
                                                </button>

                                                {errorDisplay}
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
}


export default Login