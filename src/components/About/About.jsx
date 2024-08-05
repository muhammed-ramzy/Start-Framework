import { FaStarWhite } from "../FaStarWhite/FaStarWhite"
import Styles from "./About.module.css"

export function About() {
    return (
        <>
            <section className="standard-height d-flex justify-content-center align-items-center py-5 my-sec-bg-color text-white mt-5">
                <div>

                    <h1 className="text-uppercase fw-bold mb-2 pt-5 text-center">About component</h1>
                    <FaStarWhite />
                    <div className="container">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 ">
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </div>
                                <div className="col-md-6">
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}