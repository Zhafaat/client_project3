import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import axios, { AxiosError } from 'axios';

export default function Register() {

    const navigate = useNavigate();

    const [FirstName, setFisrtName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DisplayName, setDisplayName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RepeatPassword, setRepeatPassword] = useState('');

    const submitValue = async (event)=> {
        event.preventDefault();
        if(Password === ''|| FirstName === '' || Email === ''){
            alert('nama, email dan Password tidak boleh kosong')
        } else if (Password === RepeatPassword) {
            const body = {
                'firstName': FirstName,
                'lastName': LastName,
                'displayName': DisplayName,
                'email': Email,
                'password': Password
            }
            console.log(body)
            try {
                const request = await axios.post('http://localhost:3000/account', body)
                console.log(request.data.message)
                navigate('/')

            } catch (error) {
                console.log(error)
            }
        } else {
            alert('password anda berbeda')
        }
    }

    return (
        <div className="register">
            <form className="register-form">
                <div className="register-form-input">
                    <input className='registerInput heading-5' type="text" placeholder="First Name" onChange={e => setFisrtName(e.target.value)} required/>
                    <input className='registerInput heading-5' type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                    <input className='registerInput heading-5' type="text" placeholder="Display Name" onChange={e => setDisplayName(e.target.value)} />
                    <input className='registerInput heading-5' type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                    <input className='registerInput heading-5' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                    <input className='registerInput heading-5' type="password" placeholder="repeat Password" onChange={e => setRepeatPassword(e.target.value)} required/>
                </div>
                <button className='registerButton body-large' type="submit" onClick={submitValue}>Register</button>
            </form>            
        </div>
    )
}