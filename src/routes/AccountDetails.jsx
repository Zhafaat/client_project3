import './AccountDetails.css'

export default function AccountDetails() {
    return (
        <div className="accountDetails">
            <p className='heading-1'>Account details</p>
            <form action="#" className='accountDetails-form'>
                <div className="accountDetails-form-input">
                    <div className="accountDetails-input-dataPersonal">
                        <input type="text" placeholder="First name*"/>
                        <input type="text" placeholder="Last name*"/>
                        <div className="accountDetails-displayName-container">
                            <input type="text" placeholder="Display name*"/>
                            <p className='accountDetailsDisplayNameInfo'>This will be how your name will be displayed in the account section and in reviews.</p>
                        </div>
                        <input type="text" placeholder="Email Address*"/>
                    </div>
                    <div className="accountDetails-input-changePassword">
                        <p className='body-large'>Password change</p>
                        <div className="accountDetails-changePassword-container">
                            <input type="text" placeholder="Current password (leave blank to leave unchanged)"/>
                            <input type="text" placeholder="New password (leave blank to leave unchanged)"/>
                            <input type="text" placeholder="Confirm new password"/>
                        </div>
                    </div>
                </div>
                <button className='accountDetailsSubmit body-large' type="submit">SAVE CHANGES</button>
            </form>
        </div>
    )
}