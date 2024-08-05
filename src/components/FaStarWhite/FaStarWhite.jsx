import { FaStar } from "react-icons/fa6";
import Styles from "./FaStarWhite.module.css";

export function FaStarWhite() {
    return (
        <>
            <div className={`${Styles.icon} mx-auto mb-3 text-center`}>
                <FaStar />
            </div>
        </>
    )
}