import './MyAccount.css'

import { Outlet, Link } from "react-router-dom"

export default function MyAccount() {

    
    return (
        <div className="myAccount">
            <div className="myAccount-account">
                <p className='heading-1'>My account</p>
                <div className="myAccount-account-option">
                    <Link to={"/"}><button className='accountOptionBox heading-3'>Sign In</button></Link> 

                    <Link to={"/register"}><button className='accountOptionBox heading-3'>Register</button></Link>
                    
                </div>
            </div>
            <Outlet />
        </div>
    )
}