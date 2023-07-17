const Header = () => {
    return (
        <div>
            <header className="site_header">
                <div className="container site_nav py-4">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-4 col-8 site_logo">
                            <img src="./Logo.svg" alt="Devland Logo" className="img-fluid" />
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8 col-4 site_menu">
                            <div className="row align-items-center text-end">
                                <div className="col-7 d-flex">
                                    <div className="col-4 d-md-block d-none">About</div>
                                    <div className="col-4 d-md-block d-none">Portfolio</div>
                                    <div className="col-4 d-md-block d-none">Resume</div>
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
                <div className="container header_content pt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 pb-md-0 pb-5">
                            <p className="section_sub_heading">Hello! world</p>
                            <p className="section_main_heading">I’m Josh Hartnett <br></br> <span><span>&#10094;</span></span><span className="pink_color">Developer</span><span><span>&#10093;</span></span> </p>
                            <p className="section_desc mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</p>
                            <button className="btn btn_dark me-3">Hire Me</button>
                            <button className="btn btn_light">Download Resume</button>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="./headerCharacter.png" alt="header anime character" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;