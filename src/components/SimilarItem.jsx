import './SimilarItem.css'

import item from '../assets/similaritem01.svg'

export default function SimilarItem() {
    return(
        <div className="similarItem">
            <img className='similarItemImage' src={item} alt="Ollie Earrings" />
            <div className="similarItem-namePrice">
                <p className='heading-3'>Ollie Earrings</p>
                <p className='heading-4' style={{color: "#A18A68"}}>$ 30,00</p>
            </div>
        </div>
    )
}