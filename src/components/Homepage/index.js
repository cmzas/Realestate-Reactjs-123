import React from "react";
import Homebanner from "./Homebanner";
import Homewelcome from "./Homewelcome";
import Companyintro from "./Companyintro";
import Projectgallery from "./Projectgallery";
import Homereview from "./Homereview";
import Discount from "./Discount";

const Homeindex= () =>{
    return(
        <>
        <Homebanner/>
        <Homewelcome/>
        <Companyintro/>
        <Projectgallery/>
        <Homereview/>
        <Discount/>
        </>
    )
}
export default Homeindex;