import BannerImage1 from '../../../assets/image/banner-01.png';
import TextBannerImage from '../../../assets/image/banner-02-text.png';
import './Banner.scss'

const Banner = () => {

    return (
        <div className='banner-container'>
            <div className='banner-1'>
                <img src={BannerImage1} />
            </div>
            <div className='banner-2'>
                <img src={TextBannerImage} />
            </div>
        </div>
    )
}

export default Banner;