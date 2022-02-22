import slider1 from '../../../assets/image/slider-01.jpg';
import slider2 from '../../../assets/image/slider-02.jpg';
import slider3 from '../../../assets/image/slider-03.jpg';
import './Slider.scss';
import SliderDetail from './SliderDetail';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SliderDisplay = () => {
    const sliderProps1 = {
        sliderTitle: 'NEW LEVEL OF SOUND EXPERIENCE.',
        silerDescription: `Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum the industry's dummy text ever since.`
    }
    const sliderProps2 = {
        sliderTitle: 'FRESH, BEAUTIFUL, INNOVATIVE.',
        silerDescription: `Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum the industry's dummy text ever since.`
    }
    const sliderProps3 = {
        sliderTitle: 'THE PRODUCT OF THE FUTURE',
        silerDescription: `Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum the industry's dummy text ever since.`
    }
    var settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotClass: 'dots'
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <SliderDetail
                    backgroundImg={slider1}
                    sliderTitle={sliderProps1.sliderTitle}
                    silerDescription={sliderProps1.silerDescription}
                />
                <SliderDetail
                    backgroundImg={slider2}
                    sliderTitle={sliderProps2.sliderTitle}
                    silerDescription={sliderProps2.silerDescription} />
                <SliderDetail
                    backgroundImg={slider3}
                    sliderTitle={sliderProps3.sliderTitle}
                    silerDescription={sliderProps3.silerDescription} />

            </Slider>

        </div>
    )
}

export default SliderDisplay;