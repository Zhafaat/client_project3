import home1 from '../assets/home01.svg'
import './HomeTop.css'


export default function HomeTop(props) {
    return (
        <div className="homeTop">
            <img className='homeTop-image' src={props.image} alt="commercial" />
            <div className="homeTop-commercial">
                <div className="commercial-content">
                <p className='commercial-name heading-1'>{props.name}</p>
                <p className='commercial-price heading-2'>$ {props.price}</p>
                </div>
                <button className='commercial-button'>View Product</button>
            </div>
        </div>
    )  
}