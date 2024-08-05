import Styles from "./Contact.module.css"
import { FaStarDark } from './../FaStarDark/FaStarDark';

export function Contact() {
    return (
        <>
            <section className={`standard-height d-flex justify-content-center align-items-start py-4 bg-white  mt-5`}>
                <div className="container">

                    <h1 className="text-uppercase fw-bold mb-2 pt-5 text-center ">Contact section</h1>
                    <FaStarDark />
                    <section className="col-7 mx-auto mt-5 pt-4">
                        <input type="text" placeholder="userName" className="form-control my-4 py-3 border-0 border-bottom" />
                        <input type="number" placeholder="userAge" className="form-control my-4 py-3 border-0 border-bottom" />
                        <input type="email" placeholder="userEmail" className="form-control my-4 py-3 border-0 border-bottom" />
                        <input type="password" placeholder="userPassword" className="form-control my-4 py-3 border-0 border-bottom" />
                        <button className={`${Styles.btn}`}>send Message</button>
                    </section>
                </div>

            </section>
        </>
    )
}