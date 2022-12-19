import './ResetPassword.css'

export default function ResetPassword() {
    return(
        <div className="resetPassword">
            <div className="resetPassword-head">
                <p className='heading-1'>Have you Forgotten Your Password ?</p>
                <p className='resetPasswordInformation heading-3'>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </p>
            </div>
            <form action="#" className='resetPassword-form'>
                <div className="input-container">
                    <input className='resetPasswordInputEmail heading-5' type="text" placeholder="Email"/>
                    <hr className='resetPasswordInputLine' />
                </div>
                <button className='resetPasswordButton body-large' type="submit">RESET PASSWORD</button>
            </form>
        </div>
    )
}