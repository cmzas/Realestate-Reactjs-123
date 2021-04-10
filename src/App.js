import react from "react";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Blog from "./Pages/blog";
import Videos from "./Pages/videos";
import { Route, Switch } from 'react-router-dom';
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";

const App = () => {
    return(
    <>
 <Header/>
   <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/blog" component={Blog}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/videos" component={Videos}/>
   </Switch>
   <Footer/>
   
    </>
    )
} 
export default App;