import React from "react";
import image from "../../elements/Images/image.jpg"

const Homereview = () => {
    return (
        <>
            <div class="container home-reviews-section">
                <div class="home-reviews-section-heading text-center">
                    <h1>WHY CHOOSE KHUSHAL BUILDERS</h1>
                </div>
                <div class="heading-border"></div>
                <div class="row mt-md-5">
                    <div class="col-lg-6">
                        <ul class="company-services">
                            <li><i class="far fa-building"></i>MARKETRS</li>
                            <li><i class="far fa-building"></i>INVESTEMENT CONSULTANT</li>
                            <li><i class="far fa-building"></i>DEALERS</li>
                            <li><i class="far fa-building"></i>DEVELOPERS</li>
                            <li><i class="far fa-building"></i>ADVISOR</li>
                        </ul>

                    </div>
                    <div class="col-lg-6">
                        <div class="col-lg-12  review-tab">
                            <div class="row">
                                <div class="col-md-12 col-lg-4 review-tab-image text-center">
                                    <img src={image} alt="" />

					 </div>
                                    <div class="col-md-12 col-lg-8 review-tab-text">
                                        <div class="review-text">
                                            <p>Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team @Khushal Builders for making it that simple. Highly recommended..!</p>
                                        </div>
                                        <div class="reviewer-name">
                                            <p>Hassan Ali</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12  review-tab">
                                <div class="row">
                                    <div class="col-md-12 col-lg-4 review-tab-image text-center">
                                        <img src={image} alt="" />

					</div>
                                        <div class="col-md-12 col-lg-8 review-tab-text">
                                            <div class="review-text">
                                                <p>Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team @Khushal Builders for making it that simple. Highly recommended..!</p>
                                            </div>
                                            <div class="reviewer-name">
                                                <p>Hassan Ali</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="client-review-area text-center mb-4">
                            <div class="client-status">
                                <p>Our clients love us</p>
                            </div>
                            <div class="review-average">
                                <p>We have an average of 9.6</p>
                            </div>
                            <div class="rating-star">
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                            <a href="">READ ALL REVIEWS</a>
                        </div>
                    </div>

        </>
    )
}
export default Homereview;