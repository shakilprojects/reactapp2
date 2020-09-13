import React from "react";
import Header from "../../components/Header/Header";
import Catalogue from "../../components/Pages/Catalogoue";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Pages/Login";
import Otp from "../../components/Pages/Otp";


class Web extends React.Component {
    constructor(props) {
        super();
        this.state = {
            form: 0,
            loading:false,
            mobile:"",
            coupon:"",
            otp:""
        }
    }

    render() {
        let content;
        if (this.state.form == 0) {
            content = <Login></Login>;
        }else if(this.state.form == 1) {
            content = <Otp></Otp>;
        }
        return (
            <body className="teachers-day">
            <div className="container-fluid">
                <Header></Header>
                <Catalogue></Catalogue>
                {content}
                <Footer></Footer>
                {/*<Home></Home>*/}
            </div>
            </body>
        )
    }
}

export default Web