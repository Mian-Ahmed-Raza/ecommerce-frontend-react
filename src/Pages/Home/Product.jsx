import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import { useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams();

    const Products= [
        { id: 1, name:"Mens Half Sleeve T-Shirt Cotton Base Layer Slim Muscle", price1:"$19.99", price2:"$15.99", price3:"$13.99", rating:"4.7", reviews:"47", sold:"287", type:"Clothing", material:"Cotton", mainImage:"../../assets/home-img/t-shirt.png"}
    ];

    const Product = Products[id];

    return (


        <>
        <Header />
        <Navbar />

        

        <Footer />
        </>


    )


}