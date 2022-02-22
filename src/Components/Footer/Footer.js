import './Footer.scss';
import logo from '../../assets/image/logo.png';


const Footer = () => {

    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='footer-company-container'>
                    <div className='footer-company-infor'>
                        <div className='footer-logo'>
                            <img src={logo} />
                            <p className='address-company'>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                            <div className='social'>
                                <p><i className="fa-brands fa-facebook-f"></i></p>
                                <p><i className="fa-brands fa-twitter"></i></p>
                                <p><i className="fa-brands fa-google-plus-g"></i></p>
                                <p><i className="fa-brands fa-pinterest"></i></p>
                                <p><i className="fa-brands fa-linkedin-in"></i></p>
                            </div>
                        </div>
                        <div className='footer-section'>
                            <p className='footer-section-title'>
                                Company
                            </p>
                            <a className='footer-section-link' href=''>About Us</a>
                            <a className='footer-section-link' href=''>Features</a>
                            <a className='footer-section-link' href=''>Design</a>
                        </div>
                        <div className='footer-section'>
                            <p className='footer-section-title'>
                                Useful Links
                            </p>
                            <a className='footer-section-link' href=''>Gallery</a>
                            <a className='footer-section-link' href=''>Color</a>
                            <a className='footer-section-link' href=''>Quick Order</a>
                        </div>
                        <div className='footer-section'>
                            <p className='footer-section-title'>
                                Follow Us
                            </p>
                            <a className='footer-section-link' href=''>Facebook</a>
                            <a className='footer-section-link' href=''>Twitter</a>
                            <a className='footer-section-link' href=''>Google Plus</a>
                        </div>
                        <div className='contact-container'>
                            <p className='contact-title'>Newsletter Signup</p>
                            <p className='contact-desc'>{`Sign up for the latest news & offers.`}</p>
                            <div className='input-field'>
                                <input placeholder='Your email address' type='email'></input>
                                <div className='input-submit'><i className="fa-regular fa-envelope"></i></div>
                            </div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className='copy-right'>
                    <p>© 2016 LeadGen is proudly powered by ThemeZaa.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;