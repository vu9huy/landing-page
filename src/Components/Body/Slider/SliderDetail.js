import './Slider.scss';

const SliderDetail = (props) => {
    const { backgroundImg, sliderTitle, silerDescription } = props

    return (
        <div className='slider-detail' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="slider-text-container">
                <p className='slider-text-title'>{sliderTitle}</p>
                <p className='slider-description'>{silerDescription}</p>
                <div className='slider-text-button'>
                    <div className='slider-text-btn-1 btn'>
                        PURCHASE NOW  <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className='slider-text-btn-2 btn'>
                        READ MORE  <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderDetail;