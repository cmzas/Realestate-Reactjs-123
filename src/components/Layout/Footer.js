import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer">
                    <div class="container">
                        <div class="row text-center ">
                            <div class="col-md-6 col-lg-4">
                                <div class="footer-heading">
                                    <h1>COMPANY</h1>
                                </div>
                                <div class="footer-list">
                                    <ul>
                                        <li><a href="">OFFERS</a></li>
                                        <li><a href="">BLOG</a></li>
                                        <li><a href="">CONTACT</a></li>
                                        <li><a href="">NEWS</a></li>
                                    </ul>

                                </div>

                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="footer-heading">
                                    <h1>CONTACT</h1>
                                </div>
                                <div class="footer-list">
                                    <ul>
                                        <li>contact@<span>khushalbuilders</span>.com</li>
                                        <li>+92 300-000-000</li>
                                        <li></li>

                                    </ul>
                                    <ul class="social-icons">
                                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                                        <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>

                                </div>

                            </div>
                            <div class="col-md-6 col-lg-4 ">
                                <div class="footer-heading">
                                    <h1>ADDRESS</h1>
                                </div>
                                <div class="footer-list">
                                    <ul class="address">
                                        <li><span>OFFICE :</span>2nd floor Rehman Plaza</li>
                                        <li><span>CITY :</span>Sargodha</li>
                                        <li><span>STATE :</span>Punjab</li>
                                        <li><span>ZIP CODE :</span>40100</li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;