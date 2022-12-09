import { Link } from 'react-router-dom'
import linkIn from '../assets/in.svg'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import twitter from '../assets/tw.svg'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <hr className='footer-line' />
            <div className="footer-bottom">
                <div className="bottom-left">
                    <div className="bottom-left-top">
                          <Link className='link heading-5'>CONTACT</Link>
                          <Link className='link heading-5'>TERMS OF SERVICES</Link>
                          <Link className='link heading-5'>SHIPPING AND RETURNS</Link>
                    </div>
                    <p className='heading-5'>© 2021 Shelly. <Link className='link'>Terms of use</Link> and <Link className='link'>privacy policy</Link>.</p>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-top">
                    <p>Give an email, get the newsletter.</p>
                    <hr />
                    </div>
                    <div className="bottom-right-bottom">
                        <Link><img src={linkIn} alt="Linked In" /></Link>
                        <Link><img src={fb} alt="Facebook" /></Link>
                        <Link><img src={ig} alt="Instagram" /></Link>
                        <Link><img src={twitter} alt="Twitter" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer