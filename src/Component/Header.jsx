const Header = () => {
    return (
        <div>
            <header className="site_header">

                <div className="container header_content pt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 pb-md-0 pb-5">
                            <p className="section_sub_heading">Hello! world</p>
                            <p className="section_main_heading">I’m Josh Hartnett <br></br> <span><span>&#10094;</span></span><span className="pink_color">Developer</span><span><span>&#10095;</span></span> </p>
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