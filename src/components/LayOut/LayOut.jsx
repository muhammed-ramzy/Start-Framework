import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import Styles from "./LayOut.module.css"
import { Footer } from './../Footer/Footer';

export function LayOut()
{
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}