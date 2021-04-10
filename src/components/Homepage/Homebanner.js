import { Home } from "@material-ui/icons";
import React from "react";
import image from "../../elements/Images/image.jpg"

const Homebanner = () => {
	return (
		<>
			<div class="jumbotron-fluid home-banner">
				<div class="container">
					<div class="banner-heading text-center">
						<h1>MOVE ON UP</h1>
					</div>
					<div class="banner-subheading text-center">
						<h1>We have more than 15 years of experience</h1>
					</div>
					<div class="row">
						<div class="col-md-4 banner-blog mt-3">
							<div class="col-md-12 ">
								<div class="banner-blog-image">
									<img src={image} alt="image" />
									<div class="banner-blog-text">
										<p>Blue World City</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 banner-blog mt-3">
							<div class="col-md-12 ">
								<div class="banner-blog-image">
									<img src={image} alt="image" />
									<div class="banner-blog-text">
										<p>Blue World City</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 banner-blog mt-3">
							<div class="col-md-12 ">
								<div class="banner-blog-image">
									<img src={image} alt="image" />
									<div class="banner-blog-text">
										<p>Blue World City</p>
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>

			</div>

		</>

	)
}
export default Homebanner;