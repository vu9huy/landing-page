import './ListProducts.scss';


const Product = (props) => {
    const { productImage, nameProduct, descProduct, priceProduct, priceSaleProduct } = props;
    // console.log(productImage);
    return (
        <div className='product-container' >
            <div className='product-image'>
                <img src={productImage} />

            </div>
            <div className='product-detail'>
                <p className='product-name'>
                    {nameProduct}
                </p>
                <p className='product-desc'>
                    {descProduct}
                </p>
                <div className='product-price'>
                    <p className='product-price-sale'>{priceSaleProduct}</p>
                    <p className='product-price-not-sale'>{priceProduct}</p>
                </div>
                <div className='buy-button button'>
                    BUY NOW <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Product;