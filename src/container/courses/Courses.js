import React from "react";
import Header from "../../components/Header/Header";
import Catalogue from "../../components/Pages/Catalogoue";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Pages/Login";
import Otp from "../../components/Pages/Otp";


class Courses extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="teachers-day">
                <div className="container-fluid">
                    <Header></Header>
                    <Catalogue></Catalogue>
                    <Footer></Footer>
                    {/*<Home></Home>*/}
                </div>
            </div>
        )
    }
}

export default Courses