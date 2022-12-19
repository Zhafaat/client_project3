import './SignIn.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className="signIn">
            <form action="#" className="myAccount-form">
                <div className="myAccount-form-input">
                    <div className="myAccount-form-input-container">
                        <div className="emailPassword-container">
                            <input className="myAccountFormInput heading-5" type="text" placeholder="Email"/>
                            <hr className="myAccountFormInputLine" />
                        </div>
                        <div className="emailPassword-container">
                            <input className="myAccountFormInput heading-5" type="text" placeholder="Password" />
                            <hr className="myAccountFormInputLine" />
                        </div>
                    </div>
                    <div className="myAccount-form-input-checkbox">
                        <input className="myAccountFormInputCheckbox" type="checkbox" name="rememberMe" id="rememberMe" />
                        <label className="heading-5" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                <div className="myAccount-form-button">
                    <button className="myAccountFormButton body-large" type="submit">SIGN IN</button>
                    <Link to={"/resetPassword"} className="link heading-5">Have you forgotten your password?</Link>
                </div>
            </form>
        </div>
    )
}