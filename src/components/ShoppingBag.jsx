import './ShoppingBag.css'

import ShoppingBagItem from "./ShoppingBagItem";

export default function ShoppingBag(){
    return(
        <div className="shoppingBag">
            <div className="shoppingBag-head">
                <p className="heading-5">Shopping bag</p>
                <p className="body-small" style={{color: "#707070"}}>5 items</p>
            </div>
            <div className="shoppingBag-body">
                <ShoppingBagItem></ShoppingBagItem>
                <ShoppingBagItem></ShoppingBagItem>
                <ShoppingBagItem></ShoppingBagItem>
                <ShoppingBagItem></ShoppingBagItem>
            </div>
            <hr className="shoppingBagLine" />
            <div className="shoppingBag-footer">
                <div className="shoppingBag-footer-subtotal">
                    <p className="heading-5">Subtotal (5 items)</p>
                    <p className="heading-5">$ 100,00</p>
                </div>

                <button className="shoppingBagButton body-large">VIEW CART</button>
            </div>
        </div>
    )
}