import './ColorProduct.scss';
import ColorProductImage1 from '../../../assets/image/color-product-image-01.png';
import ColorProductImage2 from '../../../assets/image/color-product-image-02.png';
import ColorProductImage3 from '../../../assets/image/color-product-image-03.png';
import ColorProductImage4 from '../../../assets/image/color-product-image-04.png';

const ColorProduct = () => {

    return (
        <div className='color-products-container'>
            <div className='color-products-text'>
                <p className='color-products-text-title'>
                    The new vibrant colors
                </p>
                <p className='color-products-text-description'>
                    The new fall/winter colors are a bit frozen over, with pale and bleached-out shades that match up with cooler days ahead. Snow Blue, Powder Pink, and Nougat Beige might be nippy to look at, but they’re as friendly to wear as your favorite sweater.
                </p>
            </div>
            <div className='color-products-image'>
                <img src={ColorProductImage1} />
                <img src={ColorProductImage2} />
                <img src={ColorProductImage3} />
                <img src={ColorProductImage4} />
            </div>
        </div>
    )
}

export default ColorProduct;