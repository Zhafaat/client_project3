import home1 from '../assets/home01.svg'
import './HomeTop.css'

export default function HomeTop() {
    return (
        <div className="homeTop">
            <img className='homeTop-image' src={home1} alt="commercial" />
            <div className="homeTop-commercial">
                <div className="commercial-content">
                <p className='commercial-name heading-1'>Gold big hoops </p>
                <p className='commercial-price heading-2'>$ 68,00</p>
                </div>
                <button className='commercial-button'>View Product</button>
            </div>
        </div>
    )
}