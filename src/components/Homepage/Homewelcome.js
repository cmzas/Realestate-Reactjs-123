import React from "react";
import image from "../../elements/Images/Badge100.png"
import imagetwo from "../../elements/Images/badge.png"

const Homewelcome = () => {
    return (
        <>
            <div class="container home-welcome-text mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-6 company-welcome-text ">
                        <h1>Welcome to <br /> KUSHAL BUILDERS</h1>

                    </div>
                    <div class="col-lg-6 certification-section">
                        <div class="row">
                            <div class="col-md-6 certfication">
                                <div class="col-md-12 text-center certfication-image">
                                    <img src={image} alt="" />

                                </div>

                            </div>
                            <div class="col-md-6 certfication">
                                <div class="col-md-12 text-center certfication-image">
                                    <img src={imagetwo} alt="" />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homewelcome;