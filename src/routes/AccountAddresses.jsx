import { Outlet, Link } from 'react-router-dom'
import AccountAddressesForm from '../components/AccountAddressesForm'
import './AccountAddresses.css'

export default function AccountAddresses(){
    return (
        <div className="accountAddresses">
            <p className="heading-5" style={{marginBottom: "45px"}}>The following addresses will be used on the checkout page by default.</p>
            <div className="accountAddresses-body">
                <div className="accountAddresses-body-left">
                    <p className="accountAddressesTitle heading-3">Billing address</p>
                    <AccountAddressesForm></AccountAddressesForm>
                    <div className="accountAddresses-body-left-container">
                        <Link className="link accountAddressesButton body-large">ADD</Link>
                        <p className="body-medium" style={{color: "#707070"}}>You have not set up this type of address yet.</p>
                    </div>
                </div>
                <div className="accountAddresses-body-right">
                    <p className="accountAddressesTitle heading-3">Shipping address</p>
                    <AccountAddressesForm></AccountAddressesForm>
                    <div className="accountAddresses-body-right-container">
                        <Link className="link accountAddressesButton body-large">ADD</Link>
                        <p className="body-medium" style={{color: "#707070"}}>You have not set up this type of address yet.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}