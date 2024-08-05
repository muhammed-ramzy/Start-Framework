import Styles from "./Home.module.css"
import pic from "../../assets/avataaars.svg"
import { FaStarWhite } from '../FaStarWhite/FaStarWhite';


export function Home() {
    return (
        <>
            <main className="standard-height d-flex justify-content-center align-items-center py-5 my-sec-bg-color text-center text-white mt-5">
                    <div>
                        <div className={`${Styles.img} mx-auto mb-3`}>
                            <img src={pic} className="img-fluid" alt="" />
                        </div>
                        <h1 className="text-uppercase fw-bold mb-2 pt-4">Start Framework</h1>
                        
                            <FaStarWhite />
                        
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                
            </main>

        </>
    )
}