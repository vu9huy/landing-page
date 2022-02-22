import logowhite from '../../assets/image/logo-white.png';
import './Navigation.scss';
import { useEffect, useState } from 'react';

const Navigation = () => {
    // const [isFirstPage, setIsFirstPage] = useState(true);
    // style={{ backgroundColor: isFirstPage === true ? 'transparent' : '#000' }}
    const [isFirstPage, setIsFirstPage] = useState(true)
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (window.scrollY === 0) {
            setIsFirstPage(true)
            // console.log(isFirstPage);
        } else if (window.scrollY > 0) {
            setIsFirstPage(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        return () => { window.removeEventListener("scroll", (e) => handleNavigation(e)); };
    }, [window.scrollY]);

    return (
        <div className='nav-container' style={{
            backgroundColor: isFirstPage === true ? 'transparent' : '#000',
            padding: isFirstPage === true ? '15px 40px' : '10px 40px',
        }}>
            <div className="nav-logo logo">
                <a href='' className='inner-link'>
                    <img alt src={logowhite} />
                </a>
            </div>
            <ul className="nav-items " >
                <li className="nav-item nav-item-1">
                    <a href="">ABOUT US</a>
                </li>
                <li className="nav-item nav-item-2">
                    <a href="">FEATURES</a>
                </li>
                <li className="nav-item nav-item-3">
                    <a href="">COLORS</a>
                </li>
                <li className="nav-item nav-item-4">
                    <a href="">DESIGN</a>
                </li>
                <li className="nav-item nav-item-5">
                    <a href="">REVIEWS</a>
                </li>
                <li className="nav-item nav-item-6">
                    <a href="">PRODUCT</a>
                </li>
                <li className="nav-item nav-item-7">
                    <a href=""><i className="fa-solid fa-cart-shopping"></i> BUY NOW </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;