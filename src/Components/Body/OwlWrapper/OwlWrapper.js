import './OwlWrapper.scss';
import './react-awesome-lightbox-style.scss';
import owlImage1 from '../../../assets/image/owl-image-01.jpg';
import owlImage2 from '../../../assets/image/owl-image-02.jpg';
import owlImage3 from '../../../assets/image/owl-image-03.jpg';
import owlImage4 from '../../../assets/image/owl-image-04.jpg';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from 'react';
import Lightbox from "react-awesome-lightbox";
// import "react-awesome-lightbox/build/style.css";

const OwlWrapper = () => {
    let owlImagesList = [
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
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)
    const [imageTest, setImageTest] = useState(owlImagesList);
    const [isDrag, setIsDrag] = useState(false);
    function handleClick(e) {
        if (!isDrag) {
            setIsImageViewerOpen(true);
        }
        console.log(e.target.src.indexOf(owlImage2));
        console.log(owlImage2);
        if (e.target.src.indexOf(owlImage1) > -1) {
            setImageTest([
                owlImage1,
                owlImage2,
                owlImage3,
                owlImage4
            ])
        }
        if (e.target.src.indexOf(owlImage2) > -1) {
            setImageTest([
                owlImage2,
                owlImage3,
                owlImage4,
                owlImage1
            ])
        }
        if (e.target.src.indexOf(owlImage3) > -1) {
            setImageTest([
                owlImage3,
                owlImage4,
                owlImage1,
                owlImage2
            ])
        }
        if (e.target.src.indexOf(owlImage4) > -1) {
            setImageTest([
                owlImage4,
                owlImage1,
                owlImage2,
                owlImage3
            ])
        }

    }
    return (
        <div className='owl-wrapper' >
            <Slider {...settings}>
                {owlImagesList.map((owlImage, index) => {
                    return (
                        <div className='owl-item' key={index}>
                            <img src={owlImage}
                                onMouseDown={() => setIsDrag(false)}
                                onMouseMove={() => setIsDrag(true)}
                                onClick={(e) => handleClick(e)}
                            />
                        </div>
                    )
                })}
            </Slider>
            {isImageViewerOpen && (
                <Lightbox
                    images={imageTest}
                    onClose={() => setIsImageViewerOpen(false)}
                />
            )}

        </div>
    )
}

export default OwlWrapper;