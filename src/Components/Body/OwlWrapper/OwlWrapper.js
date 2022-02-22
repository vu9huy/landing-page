import './OwlWrapper.scss';
import owlImage1 from '../../../assets/image/owl-image-01.jpg';
import owlImage2 from '../../../assets/image/owl-image-02.jpg';
import owlImage3 from '../../../assets/image/owl-image-03.jpg';
import owlImage4 from '../../../assets/image/owl-image-04.jpg';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';


// import Lightbox from "react-awesome-lightbox";
// import "react-awesome-lightbox/build/style.css";

const OwlWrapper = () => {
    const owlImagesList = [
        owlImage1,
        owlImage2,
        owlImage3,
        owlImage4
    ];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotClass: 'dots'
    };
    // const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)

    return (
        <div className='owl-wrapper' >
            {/* {isImageViewerOpen && (
                <Lightbox
                    images={images}
                    startIndex={imageIndex}
                // onClose={() => setIsImageViewerOpen(false)}
                />
            )} */}
            <Slider {...settings}>
                {owlImagesList.map((owlImage, index) => {
                    return (
                        <div className='owl-item' key={index}>
                            <img src={owlImage} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default OwlWrapper;