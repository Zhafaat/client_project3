import { Link } from "react-router-dom"

export default function AccountDashboard() {
    return (
        <div className="accountDashboard flex-column" style={{height: "64px"}}>
            <p className="heading-5">Hello Vitatheme (not Vitatheme? <Link className="link" style={{color: "rgba(161, 138, 104, 1)"}}>Log out</Link>)</p>
            <p className="heading-5">From your account dashboard you can view your <Link className="link" style={{color: "rgba(161, 138, 104, 1)"}}>recent orders</Link>, manage your <Link className="link" style={{color: "rgba(161, 138, 104, 1)"}}>shipping and billing addresses</Link>, and edit your <Link className="link" style={{color: "rgba(161, 138, 104, 1)"}}>password and account details</Link>.</p>
        </div>
    )
}