
const InnerHomePage = () => {
    return (
        <div>
            <section className="experience py-5 position-relative">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12 experience_content d-flex justify-content-center mb-lg-0 mb-5">
                            <p className="section_main_heading pink_color me-4">
                                <img src="./05.png" alt="number 5" className="img-fluid" />
                            </p>
                            <div>
                                <p className="section_heading">Years Experience <br></br> in Field</p>
                                <p className="sec_desc">Lorem ipsum dolor sit amet consectetur <br></br> adipiscing elit sed do eiusmod tempor <br></br> incididunt ut labore.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 experience_code d-md-flex d-block">
                            <div className="col-md-6 col-12 me-md-4 mb-md-0 mb-4">
                                <img src="./exp_coding.png" alt="coding picture" className="img-fluid w-100" />
                            </div>
                            <div className="col-md-6 col-12">
                                <img src="./exp_product_brand.png" alt="product brand picture" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="pattern_bg position-absolute">
                        <img src="./exp_pattern_bg.png" alt="spring pattern design" />
                    </div>
                </div>
            </section>
            {/* Our creative work  */}
            <section className="py-5">
                <div className="container our_creative_work py-5">
                    <div className="row py-5 justify-content-center">
                        <div className="col-lg-5 col-md-7 col-12 text-center">
                            <p className="section_heading">Our Creative Work</p>
                            <p className="section_desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                                eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    {/* <!-- Card1 --> */}
                    <div className="row justify-content-center card_1">
                        <div className="col-10 horizontal_card">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12 horizontal_card_content">
                                    <div>
                                        <p className="section_heading">Crytop Trading page</p>
                                        <p className="section_desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn_light mt-4">Read Case Study</button>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <img src="./our_creative_work_img.png" alt="creative image" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card2 --> */}
                    <div className="row justify-content-center card_2">
                        <div className="col-10 horizontal_card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    <img src="./card_2_img.png" alt="creative image" className="img-fluid w-100" />
                                </div>
                                <div className="col-lg-6 col-12 horizontal_card_content">
                                    <div>
                                        <p className="section_heading">Crytop Trading page</p>
                                        <p className="section_desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn_light mt-4">Read Case Study</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card3 --> */}
                    <div className="row justify-content-center card_3">
                        <div className="col-10 horizontal_card">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12 horizontal_card_content">
                                    <div>
                                        <p className="section_heading">Crytop Trading page</p>
                                        <p className="section_desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn_light mt-4">Read Case Study</button>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <img src="./card_3_img.png" alt="creative image" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card4 --> */}
                    <div className="row justify-content-center card_4">
                        <div className="col-10 horizontal_card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    <img src="./card_4_img.png" alt="creative image" className="img-fluid w-100" />
                                </div>
                                <div className="col-lg-6 col-12 horizontal_card_content">
                                    <div>
                                        <p className="section_heading">Crytop Trading page</p>
                                        <p className="section_desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div>
                                        <button className="btn btn_light mt-4">Read Case Study</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- button --> */}
                    <div className="row py-5 justify-content-center">
                        <div className="text-center">
                            <button className="btn btn_dark">Contact Me</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InnerHomePage;