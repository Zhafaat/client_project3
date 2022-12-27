import './AccountAddressesForm.css'

export default function AccountAddressesForm(){
    return (
        <div className="accountAddressesForm">
            <form action="#" className='accountAddresses-form'>
                        <div className="accountAddresses-form-input">
                            <div className="accountAddresses-input-name">
                                <input type="text" style={{width: "270px"}} placeholder='First name *'/>
                                <input type="text" style={{width: "270px"}} placeholder='last name *'/>
                            </div>
                            <input type="text" placeholder='Company Name'/>
                            <input type="text" placeholder='Country *' />
                            <input type="text" placeholder='Street Address *' />
                            <input type="text" placeholder='Postcode / ZIP *' />
                            <input type="text" placeholder='Town / City *' />
                            <input type="text" placeholder='Phone *' />
                            <input type="text" placeholder='Email *' />
                        </div>
                        <button type="submit" className='accountAddresseSubmit body-large'>SAVE ADDRESS</button>
                    </form>
        </div>
    )
}