import './ListProducts.scss';
import ProductImage1 from '../../../assets/image/product-img-01.png';
import ProductImage2 from '../../../assets/image/product-img-02.png';
import ProductImage3 from '../../../assets/image/product-img-03.png';
import ProductImage4 from '../../../assets/image/product-img-04.png';
import Product from './Product';


const ListProducts = () => {
    const productListData = [
        {
            productImage: ProductImage1,
            nameProduct: 'DOOM STUDIO WIRELESS',
            descProduct: 'Designed for Sound',
            priceProduct: '$699',
            priceSaleProduct: '$399'
        },
        {
            productImage: ProductImage2,
            nameProduct: 'DOOM SOLO WIRELESS',
            descProduct: 'Feel the Music',
            priceProduct: '$599',
            priceSaleProduct: '$299'
        },
        {
            productImage: ProductImage3,
            nameProduct: 'DOOM EP WIRELESS',
            descProduct: 'Start Listening',
            priceProduct: '$449',
            priceSaleProduct: '$249'
        },
        {
            productImage: ProductImage4,
            nameProduct: 'DOOM PRO WIRELESS',
            descProduct: 'Tuned for Emotion',
            priceProduct: '$799',
            priceSaleProduct: '$499'
        }
    ]
    return (
        <div className='list-products'>
            {productListData.map((product, index) => {
                return (<Product key={index}
                    productImage={product.productImage}
                    nameProduct={product.nameProduct}
                    descProduct={product.descProduct}
                    priceProduct={product.priceProduct}
                    priceSaleProduct={product.priceSaleProduct}
                />)
            })}
        </div>
    )
}

export default ListProducts;