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
                          <Link to={"/contact"} className='link-footer heading-5'>CONTACT</Link>
                          <Link className='link-footer heading-5'>TERMS OF SERVICES</Link>
                          <Link className='link-footer heading-5'>SHIPPING AND RETURNS</Link>
                    </div>
                    <p className='heading-5'>© 2021 Shelly. <Link className='link-footer'>Terms of use</Link> and <Link className='link-footer'>privacy policy</Link>.</p>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-top">
                    <p className='heading-5' style={{color: '#707070'}}>Give an email, get the newsletter.</p>
                    <hr className='bottom-right-line'/>
                    </div>
                    <div className="bottom-right-bottom">
                        <Link><img className='linkIn' src={linkIn} alt="Linked In" /></Link>
                        <Link><img className='fb' src={fb} alt="Facebook" /></Link>
                        <Link><img className='ig' src={ig} alt="Instagram" /></Link>
                        <Link><img className='twitter' src={twitter} alt="Twitter" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer