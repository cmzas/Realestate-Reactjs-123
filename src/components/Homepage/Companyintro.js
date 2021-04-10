import React from "react";
import image from "../../elements/Images/c-image.jpg";

const Companyintro = () => {
    return (
        <>
            <div class="container company-intro mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="company-intro-text">
                            <p>
                                Welcome to the rapidly emerging Real Estate Company Khushal Builders Sargodha working from last 15 years. Our professional team is serving many housing societies for marketing purposes and has completed many renowned projects achieving high excellency. Use of most modern techniques of marketing like e-media and web-based medium for mass communication is one of our strengths to reach-out maximum number of clients and customers.
				            </p>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="company-image">
                            <img src={image} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Companyintro;