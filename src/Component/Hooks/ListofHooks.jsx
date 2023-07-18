import { Link } from "react-router-dom";

const ListofHooks = () => {
    return (
        <div>
            <div className="container">
                <div className="col-lg-4 col-12 horizontal_card_content border p-5">
                    <div>
                        <p className="section_desc text-center">useState Hook</p>
                    </div>
                    <div>
                        <Link to="/hook/usestate" className="btn btn_light m-auto d-block">Read More</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ListofHooks;