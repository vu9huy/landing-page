import SliderDisplay from "./Slider/SliderDisplay";
import './Body.scss';
import ProductDetail1 from "./ProductDetail/ProductDetail1";
import ProductDetail2 from "./ProductDetail/ProductDetail2";
import OwlWrapper from "./OwlWrapper/OwlWrapper";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ColorProduct from "./ColorProduct/ColorProduct";
import ProductDesign from "./ProductDesign/ProductDesign";
import Banner from "./Banner/BannerProduct";
import ReviewProducts from "./ReviewProducts/ReviewProducts";
import SendMail from "./SendMail/SendMail";
import ListProducts from "./ListProducts/ListProducts";


const Body = () => {

    return (
        <div className="body" >
            <SliderDisplay />
            <ProductDetail1 />
            <OwlWrapper />
            <ProductDetail2 />
            <ProductFeatures />
            <ColorProduct />
            <ProductDesign />
            <Banner />
            <ReviewProducts />
            <SendMail />
            <ListProducts />
        </div>
    )
}

export default Body;