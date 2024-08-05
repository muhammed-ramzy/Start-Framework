import Styles from "./Footer.module.css"
import { TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialFacebookCircular } from "react-icons/ti";
import { FaGlobe, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export function Footer() {
    return (
        <>
            <footer className="my-main-bg-color text-white text-center">
                <section className="my-main-bg-color py-5" >
                    <div className="d-flex justify-content-between mx-auto p-5">
                        <div className="col-4  fs-3">
                            <h2 className="text-uppercase fs-3">location</h2>
                            <p className="fs-6">2215 John Danial Drive</p>
                            <p className="fs-6">Clark, MO 65243</p>
                        </div>
                        <div className="col-4 text-center">
                            <h2 className="text-uppercase fs-3">Around The Web</h2>
                            <div className="d-flex justify-content-center ">

                                <span className={`${Styles.icon}`}>
                                    <FaFacebook />
                                </span>
                                <span className={`${Styles.icon}`}>
                                    <FaTwitter />
                                </span>
                                <span className={`${Styles.icon}`}>
                                    <FaLinkedinIn />
                                </span>
                                <span className={`${Styles.icon}`}>
                                    <FaGlobe />
                                </span>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <h2 className="text-uppercase fs-3">About Freelancer</h2>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </section>
                <section className={Styles.copyright}>
                    <p className="m-0 py-4">Copyright © Your Website 2021</p>
                </section>
            </footer>
        </>
    )
}