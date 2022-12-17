import './SignIn.css'

export default function SignIn() {
    return (
        <div className="signIn">
            <form action="#" className="contact-form">
                <div className="contact-form-input">
                    <div className="contact-form-input-container">
                        <div className="emailPassword-container">
                            <input className="contactFormInput heading-5" type="text" placeholder="Email"/>
                            <hr className="contactFormInputLine" />
                        </div>
                        <div className="emailPassword-container">
                            <input className="contactFormInput heading-5" type="text" placeholder="Password" />
                            <hr className="contactFormInputLine" />
                        </div>
                    </div>
                    <div className="contact-form-input-checkbox">
                        <input className="contactFormInputCheckbox" type="checkbox" name="rememberMe" id="rememberMe" />
                        <label className="heading-5" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                <div className="contact-form-button">
                    <button className="contactFormButton body-large" type="submit">SIGN IN</button>
                    <p className="heading-5">Have you forgotten your password?</p>
                </div>
            </form>
        </div>
    )
}