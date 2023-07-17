import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="container site_nav py-4">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 col-md-4 col-8 site_logo">
                        <Link to="/" >
                            <img src="./Logo.svg" alt="Devland Logo" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-8 col-4 site_menu">
                        <div className="row align-items-center text-end">
                            <div className="col-7 d-flex">
                                <Link to="/hook" className="col-4 d-md-block d-none">Hoocks</Link>
                                {/* <div className="col-4 d-md-block d-none">Portfolio</div>
                                <div className="col-4 d-md-block d-none">Resume</div> */}
                            </div>
                            <div className="col-5">
                                <div className="col-12 d-md-block d-none">
                                    <button className="btn btn_light"><span>Let’s Chat <img src="./chatIcon.png" alt="chat badge" width="15px" /></span></button>
                                </div>
                            </div>
                            <div className="col-12 d-md-none d-block text-end">
                                <img src="./menu-bars.svg" alt="menu bar" width="19px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;