import './ProductFeatures.scss';
import ProductFeaturesImage from '../../../assets/image/product-features.jpg';

const ProductFeatures = () => {

    return (
        <div className='product-features'>
            <div className='product-features-text'>
                <div className='product-features-text-wrapper'>
                    <p className='product-features-text-number'>
                        01.
                    </p>
                    <div className='product-features-text-detail'>
                        <p className='product-features-text-title'>
                            The best sound.
                        </p>
                        <p className='product-features-text-description'>
                            Put it on repeat and stay unplugged all day thanks to up to 40 hours of battery life. You can keep track of the battery with the illuminated LED fuel gauge located on the headphone itself.
                        </p>
                    </div>
                </div>
                <div className='product-features-text-wrapper'>
                    <p className='product-features-text-number'>
                        02.
                    </p>
                    <div className='product-features-text-detail'>
                        <p className='product-features-text-title'>
                            Unbelievable doom.
                        </p>
                        <p className='product-features-text-description'>
                            This headphone delivers premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance. The comfort-cushion ear cups buffer outside noise for immersive sound.
                        </p>
                    </div>
                </div>
                <div className='product-features-text-wrapper'>
                    <p className='product-features-text-number'>
                        03.
                    </p>
                    <div className='product-features-text-detail'>
                        <p className='product-features-text-title'>
                            Drop the bass.
                        </p>
                        <p className='product-features-text-description'>
                            The ultimate staple in your headphone closet, Plattan offers a rich, secluded sound experience, and convenient extras that make life easier. Features a fabric headband, tangle-free cable, built-in mic/remote.
                        </p>
                    </div>
                </div>
            </div>
            <div className='product-features-image'>
            </div>
        </div>
    )
}

export default ProductFeatures;