import { FaStar } from "react-icons/fa6";
import Styles from "./FaStarDark.module.css";

export function FaStarDark() {
    return (
        <>
            <div className={`${Styles.icon} mx-auto mb-3 text-center`}>
                <FaStar />
            </div>
        </>
    )
}