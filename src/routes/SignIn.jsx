import './SignIn.css'
import { Link, redirect } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios, { AxiosError } from 'axios';

export default function SignIn() {

    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const submitValue = async (event) => {
        event.preventDefault();
        const body = {
            'email': Email,
            'password': Password
        }
        console.log(body)
        try {
            const request = await axios.post('http://localhost:3000/account/login', body)
            // console.log('==== hello')
            console.log(request.data)
            // console.log(request.data.account_id)
            // console.log(request.data.access_token)
            localStorage.setItem('account_id', request.data.account_id)
            localStorage.setItem('access_token', request.data.access_token)
            navigate("/home")
        } catch (error) {
            console.log(error.response.data)
            alert(error.response.data.message)
            
        }
    }

    return (
        <div className="signIn">
            <form className="myAccount-form">
                <div className="myAccount-form-input">
                    <div className="myAccount-form-input-container">
                        <div className="emailPassword-container">
                            <input className="myAccountFormInput heading-5" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                            <hr className="myAccountFormInputLine" />
                        </div>
                        <div className="emailPassword-container">
                            <input className="myAccountFormInput heading-5" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                            <hr className="myAccountFormInputLine" />
                        </div>
                    </div>
                    <div className="myAccount-form-input-checkbox">
                        <input className="myAccountFormInputCheckbox" type="checkbox" name="rememberMe" id="rememberMe" />
                        <label className="heading-5" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                <div className="myAccount-form-button">
                    <button className="myAccountFormButton body-large" type="submit" onClick={submitValue}>SIGN IN</button>
                    <Link to={"/resetPassword"} className="link heading-5">Have you forgotten your password?</Link>
                </div>
            </form>
        </div>
    )
}