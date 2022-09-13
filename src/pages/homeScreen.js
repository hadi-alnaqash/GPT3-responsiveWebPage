import  Blog  from "../components/Home/blog"
import  Brand  from "../components/Home/brand"
import  Features  from "../components/Home/features"
import  Footer  from "../components/Home/footer"
import  Gta  from "../components/Home/gta"
import  Header  from "../components/Home/header"
import  NavBar  from "../components/Home/navBar"
import  Possibility  from "../components/Home/possibility"
import  WhatGPT3  from "../components/Home/whatGPT3"


const HomeScreen = () => {
    return ( 
        <div className={"gradient__bg"}>
            <NavBar/>
            <Header/>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Gta/>
            <Blog/>
            <Footer/>
        </div>
        
     );
}
 
export default HomeScreen;