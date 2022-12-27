import './AccountEmptyList.css'

import { Link } from "react-router-dom"

export default function AccountEmptyList(props) {
    return (
        <div className="accountEmptyList">
            <p className="heading-5">{props.innerHTML}</p>
            <Link className="link body-large" style={{color: "#A18A68"}}>BROWSE PRODUCT</Link>
        </div>
    )
}