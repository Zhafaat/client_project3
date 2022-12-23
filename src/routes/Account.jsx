import './Account.css'

import { Outlet, Link } from "react-router-dom";

export default function Account() {
    return (
        <div className="account">
            <div className="account-head-container">
                <div className="account-head">
                    <p className='accountTitle heading-1'>My Account</p>
                    <div className="account-navbar">
                        <Link to={"/account/dashboard"} className='heading-3 link' style={{color: "#707070"}}>Dashboard</Link>
                        <Link className='heading-3 link' style={{color: "#707070"}}>Orders</Link>
                        <Link className='heading-3 link' style={{color: "#707070"}}>Downloads</Link>
                        <Link className='heading-3 link' style={{color: "#707070"}}>Addresses</Link>
                        <Link className='heading-3 link' style={{color: "#707070"}}>Account details</Link>
                        <Link className='heading-3 link' style={{color: "#707070"}}>Logout</Link>
                    </div>
                </div>
                <hr className='accountLine'/>
            </div>
            <Outlet></Outlet>
        </div>
    )
}