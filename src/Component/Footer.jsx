const Footer = () => {
    return (
        <div>
            <footer className="py-5">
                <div className="container pb-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="row gy-5">
                                <div className="col-lg-4 col-md-6">
                                    <img src="./Logo.svg" alt="devland logo" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <p className="footer_heading">Uitility Page</p>
                                    <p className="section_desc">Style guide</p>
                                    <p className="section_desc">404 not found</p>
                                    <p className="section_desc">Password</p>
                                    <p className="section_desc">protected</p>
                                    <p className="section_desc">Licenses</p>
                                    <p className="section_desc">Changelog</p>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <p className="footer_heading">Stay Connect</p>
                                    <p className="test_desc mb-0">43 Division Drive</p>
                                    <p className="test_desc">Stratford, CT 06614</p>
                                    <p className="footer_heading fw_400 mb-0">richard10@gmail.com</p>
                                    <p className="test_desc">Phone: 000 5486 9846</p>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./footer_insta.svg" alt="" width="20px" />
                                        </div>
                                        <div className="col-2">
                                            <img src="./footer_fb.svg" alt="" width="20px" />
                                        </div>
                                        <div className="col-2">
                                            <img src="./footer_twitter.svg" alt="" width="20px" />
                                        </div>
                                        <div className="col-2">
                                            <img src="./footer_linkdin.svg" alt="" width="20px" />
                                        </div>
                                        <div className="col-2">
                                            <img src="./footer_youtube.svg" alt="" width="20px" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="row">
                                        <div className="col-md-2 col-1 me-md-0 me-2">
                                            <img src="./hands.png" alt="hand shake" width="35px" />
                                        </div>
                                        <div className="col-10">
                                            <p className="footer_heading">Thanks for Scrolling</p>
                                        </div>
                                    </div>
                                    <p className="test_desc">© 2022 by Richard Brin.</p>
                                    <button className="btn btn_light border border-1 mt-4"><span><img src="./chatIcon.png" alt="" width="10px" /> Lets’Chat</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;