import React from "react";

const Contactform = () => {
    return(
        <>
        <div class="jumbotron-fluid contact-banner">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 form-left">
					<div class="head-office-address">
					<div class="form-left-heading mt-5">
						<h1>HEAD OFFFICE</h1>
					</div>
					<div class="form-left-border">

					</div>
					<div class="form-left-list address">
						<div class="row mt-3 mb-3">
						<div class="col-2 icon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<div class="col-10 head-office-address">
						<p>2nd floor Rehman Plaza, Sargodha, Punjab</p>	
						</div>
					</div>
					<div class="row mt-3 mb-3">
						<div class="col-2 icon">
							<i class="fas fa-phone-alt"></i>
						</div>
						<div class="col-10 head-office-number">
							<p>(048) 222-222</p> 
						</div>
						
					</div>
					</div>
				</div>
				<div class="regional-office-address">
					<div class="form-left-heading">
						<h1>REGIONAL OFFFICE</h1>
					</div>
					<div class="form-left-border">

					</div>
					<div class="form-left-list address">
						<div class="row mt-3 mb-3">
							<div class="col-2 icon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<div class="col-10 regional-office-address ">
								<p>2nd floor Rehman Plaza, Sargodha, Punjab</p>
							</div>
							
						</div>
						<div class="row mt-3 mb-3">
							<div class="col-2 icon">
								<i class="fas fa-phone-alt"></i>
							</div>
							<div class="col-10 regional-office-number">
								<p>(048) 222-222</p>
							</div>
							
						</div>
						<div class="row mt-3 mb-3">
							<div class="col-2 icon">
								<i class="fas fa-envelope"></i>
							</div>
							<div class="col-10 regional-office-email" >
							<p>contact@khushalbuilders.com</p>	
							</div>
							
						</div>
						<div class="col-12 regional-office-image">
							<img src="images/image.jpg" alt="" />

						</div>
					</div>
				</div>


				</div>
				<div class="col-lg-8 form-right">
					<div class="container">
						<div class="form-right-heading">
						<h1>Get in touch</h1>
					</div>
						<form class="pb-5"> 
						  <div class="form-group">
							  <div class="row">
								  <div class="col-6">
									<input type="text" class="form-control" id="name" placeholder="Full Name" name="name" />
								  </div>
								  <div class="col-6">
									<input type="email" class="form-control " id="email" placeholder="Email" name="email" />
								  </div>
							  </div>
							
							
							
						  </div>
						  <div class="form-group">
							<div class="row">
								<div class="col-6">
									<input type="text" class="form-control" id="nnumber" placeholder="Contact Number" name="number" />
								</div>
								<div class="col-6">
									<input type="text" class="form-control" id="email" placeholder="Subject" name="subject" />
								</div>
							</div>
							
							
						  </div>
						  <textarea placeholder="Type a message" class="form-control"></textarea>
						  <button type="submit" >SEND</button>
						</form>
					  </div>

				</div>
			</div>

		</div>

	</div>

        </>
    )
}
export default Contactform;