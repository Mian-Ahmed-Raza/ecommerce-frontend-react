import Header from "../../Components/Header/Header.jsx";
import Navbar from "../../Components/Header/Navbar.jsx";
import Newsletter from "../../Components/Footer/Newsletter.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import MainSection from "../../Components/Main-Section/MainSection.jsx";
import SaleSection from "../../Components/Sale-Section/Sale-Section.jsx";
import ItemsGroup from "../../Components/Items-Group/Items-Group.jsx";
import InquirySection from "../../Components/Inquiry-Section/InquirySection.jsx";
import RecommendSection from "../../Components/Recommend-Section/RecommendSection.jsx";
import ServiceSection from "../../Components/Services-Section/ServiceSection.jsx";


import backimg1 from '../../assets/home-img/items grp 1.jpg';
import backimg2 from '../../assets/home-img/items grp 2.png';

function Home() {

    return (

        <>
            <Header />
            <Navbar />
            <MainSection />
            <SaleSection />
            <ItemsGroup title="Home and outdoor" backgroundImage={backimg1} />
            <ItemsGroup title="Consumer electronics and gadgets" backgroundImage={backimg2} />
            <InquirySection />
            <RecommendSection />
            <ServiceSection />
            <Newsletter />
            <Footer />
        </>

    )

}

export default Home;