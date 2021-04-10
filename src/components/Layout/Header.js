import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
        {/* <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About Us</Link>
        <br/>
        <Link to="/contact">Contact Us</Link> */}

<div className="jumbotron-fluid ">

<nav className="navbar navbar-expand-lg navbar-dark header-bg">
  <Link className="navbar-brand" to="/"><img src="https://skymarketing.com.pk/wp-content/uploads/2019/01/Sky-Marketing-logo.png" width="200px" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">

<ul className="navbar-nav ml-auto menu-ul">
	<li className="nav-item" id="active"> <Link className="nav-link" to="/">HOME </Link> </li>
	<li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
	<li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
	<li className="nav-item dropdown">
		<Link className="nav-link  dropdown-toggle" to="/project" data-toggle="dropdown">PROJECTS</Link>
	    <ul className="dropdown-menu fade-up">
		  <li><Link className="dropdown-item" to="/project"> PROJECTS ITEM 1 </Link></li>
		  <li><Link className="dropdown-item" to="/project"> PROJECTS ITEM 2 </Link></li>
		  <li><Link className="dropdown-item" to="/project"> PROJECTS ITEM 3 </Link></li>
          <li><Link className="dropdown-item" to="/project"> PROJECTS ITEM 3 </Link></li>
          <li><Link className="dropdown-item" to="/project"> PROJECTS ITEM 3 </Link></li>
	    </ul>
	</li>
    <li className="nav-item "> <Link className="nav-link" to="/offers">OFFERS</Link> </li>
    <li className="nav-item "> <Link className="nav-link" to="/news">NEWS</Link> </li>
    <li className="nav-item "> <Link className="nav-link" to="/career">CAREER</Link> </li>
    <li className="nav-item "> <Link className="nav-link" to="/reviews">REVIEWS</Link> </li>
    <li className="nav-item "> <Link className="nav-link" to="/contact">CONTACT</Link> </li>
</ul>

  </div> 
</nav>
</div>

</>
    )
}
export default Header;