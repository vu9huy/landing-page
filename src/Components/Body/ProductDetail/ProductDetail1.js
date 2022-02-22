import './ProductDetail.scss';
import productDetail1 from '../../../assets/image/product-image-01.png'

const ProductDetail1 = () => (
    <div className='product-detail-container'>
        <div className='product-detail-description'>
            <p className='product-detail-large-text'>The best product on the market, just for you.</p>
            <p className='product-detail-medium-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
            <p className='product-detail-small-text'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
            <div className='product-detail-button button'>
                CONTINUE READING <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className='product-detail-image'>
            <img src={productDetail1} />
        </div>
    </div>
)
export default ProductDetail1;