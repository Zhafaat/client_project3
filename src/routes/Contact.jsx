import './Contact.css'


export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-head">
                <p className='heading-1'>Contact Us</p>
                <p className='heading-3' style={{width: "561px", textAlign: "center"}}>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
            </div>
            <div>
                <form action="#" className="contact-form">
                    <div className="contact-form-input">
                        <div className="form-input-personalInformation">
                            <div className="form-input-personalInformation-container">
                                <div className="input-container">
                                    <input className='contactFormInput heading-5' type="text" placeholder="First name"/>
                                    <hr className='contactFormInputLine' />
                                </div>
                                <div className="input-container">
                                    <input className='contactFormInput heading-5' type="text" placeholder="Last name"/>
                                    <hr className='contactFormInputLine' />
                                </div>
                            </div>
                            <div className="form-input-personalInformation-container">
                                <div className="input-container">
                                    <input className='contactFormInput heading-5' type="text" placeholder="Email"/>
                                    <hr className='contactFormInputLine' />
                                </div>
                                <div className="input-container">
                                    <input className='contactFormInput heading-5' type="text" placeholder="Subject"/>
                                    <hr className='contactFormInputLine' />
                                </div>
                            </div>
                        </div>
                        <div className="form-input-message">
                            <input className='contactFormInput heading-5' type="text" placeholder="Message"/>
                            <hr className='formInputMassageLine' />
                        </div>
                    </div>
                    <button className='contactFormButton body-large' type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}