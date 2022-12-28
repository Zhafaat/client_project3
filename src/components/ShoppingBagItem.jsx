import './ShoppingBagItem.css'

import item from '../assets/shoppingbag01.svg'
import cross from '../assets/cross.svg'

export default function ShoppingBagItem() {
    return (
        <div className="shoppingBagItem">
            <img className='shoppingBagItemImage' src={item} alt="Item" />
            <div className="shoppingBagItem-info">
                <button className='shoppingBagItemCross'><img src={cross} alt="cross" /></button>
                <div className="shoppingBagItem-namePrize-container">
                    <p className='body-medium' style={{color: "#000000"}}>Item Name</p>
                    <p className='body-medium' style={{color: "#707070"}}>color / size</p>
                    <p className='body-medium' style={{color: "#A18A68"}}>prize</p>

                </div>
                <div className="shoppingBagItem-QTY-container">
                    <p className='body-small' style={{color: "#707070"}}>QTY:</p>
                    <div className="shoppingbagItem-inputQuantity">
                        <button className='quantityButton body-medium' style={{padding: "0"}}>-</button>
                        <p className='body-medium'>1</p>
                        <button className='quantityButton body-medium' style={{padding: "0"}}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}