import Styles from "./Portfolio.module.css";
import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaStarDark } from './../FaStarDark/FaStarDark';

export function Portfolio() {

    useEffect(() => {
        $(".plus-card").on("click", function (e) {
            $("#overlay .card img").attr("src", $(e.currentTarget).next("img").attr("src"))
            $("#overlay").removeClass("d-none")
        });


        $("#overlay").on("click", function (e) {
            
            if(!$(e.target).hasClass("img-fluid"))
            {
                $("#overlay").addClass("d-none")
            }
        });

        $(window).on('scroll', function() {
            const topOffset = $(this).scrollTop();
            console.log("Top offset:", topOffset);
            // Add your code here to handle the scroll event
            if(topOffset !== 0)
            {
                $(".navbar").removeClass("py-4")
            }
            else
            {
                $(".navbar").addClass("py-4")
            }

            // console.log($(".navbar").removeClass("py-4"));
        });
        
    


        return () => {
            $(".card img").off("click");
        };
    }, []);

    return (
        <>
            <section className={`standard-height d-flex justify-content-center align-items-start py-5 bg-white my-text-color mt-5`}>
                
            <section id="overlay" className={`${Styles.overlay} d-none d-flex bg-info bg-opacity-25 justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0`}>
                <div className="card border-0  col-6">
                    <img src={img1} className="img-fluid" alt="" />
                </div>
            </section>

                <div className="container">

                    <h1 className="text-uppercase fw-bold mb-2 pt-5 text-center">Portfolio component</h1>
                    <FaStarDark />

                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img1} className="img-fluid " alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img2} className="img-fluid " alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img3} className="img-fluid " alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img1} className="img-fluid " alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img2} className="img-fluid " alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card position-relative rounded-3 overflow-hidden">
                                <div className={`${Styles.overlayCard} plus-card position-absolute  bg-success bg-opacity-75 start-0 end-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center h-100`}>
                                <FaPlus className={Styles.plus}/>
                                </div>
                                <img src={img3} className="img-fluid " alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* the overlay section */}

            
        </>
    )
}