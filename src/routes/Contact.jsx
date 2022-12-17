import { Outlet, Link } from "react-router-dom"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-account">
                <p>My account</p>
                <div className="contact-account-option">
                    <Link to={"/contact"}>Sign in</Link>
                    <Link to={"/contact/register"}>Register</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}