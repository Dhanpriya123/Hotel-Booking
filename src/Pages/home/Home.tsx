
import Featured from "../../components/navbar/Featured";
import FeaturedProperty from "../../components/navbar/FeaturedProperty";
import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import MailList from "../../components/navbar/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/navbar/PropertyList";

import "./Home.css";


const Home = () =>{
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by propertyType</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guest Loves</h1>
                <FeaturedProperty/>
                <MailList/>
                <Footer/>
            </div>
            
        </div>
    )
};
export default Home;