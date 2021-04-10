import React from "react";

const Discount = () => {
    return (
        <>
            <div class="jumbotron-fluid discount-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="discount-left-heading">
                                <h1>WE ARE READY TO SERVE YOU IN REAL ESTATE</h1>

                            </div>
                            <div class="discount-left-border"></div>
                            <div class="discount-left-contact">
                                <h1>CALL US TODAY</h1>
                                <p>(000) 000-0000</p>
                                <p>+92 300-000-000</p>

                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="form-area">
                                <h1>Request for <span>Discount</span> Booking</h1>
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Full Name" name="name" />
                                    </div>
                                    <div class="input-border"></div>
                                    <div class="form-group">

                                        <input type="text" class="form-control" id="number" placeholder="Contact Number" name="number" />
                                    </div>
                                    <div class="input-border"></div>
                                    <div class="form-group">
                                        <textarea placeholder="Type a message" class="form-control"></textarea>
                                    </div>
                                    <div class="input-border mb-2"></div>
                                    <button type="submit" class="btn btn-primary">SEND</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Discount;