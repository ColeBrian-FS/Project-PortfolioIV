import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link"
import { useRouter } from 'next/router';
import validation from "../components/services/login validation"
const Login = () => {
    const router = useRouter()
    const initialState = { email: "", password: "", }


    const [input, setinput] = useState(initialState);

    const handleInputChange = event => {

        const { name, value } = event.target

        setinput({ ...input, [name]: value })

    }
    const handleSubmit = () => {
        router.push('/dashboard')
    }
    return (
        <>
            <Head>
                <title>login</title>
                <meta name="description" content="Brian Cole's Portfolio - Exercise App"></meta>
                <meta
                    property="og:title"
                    content="Brian Cole Portfolio."
                />
            </Head>
            <div className="form-container">
                <h1>LOGIN</h1>
                <div>
                    <form onSubmit={e => {
                        e.preventDefault()
                        let err = validation.validate(input)
                        err != null ?
                            validation.handleErrorChange(err) :
                            handleSubmit(input)
                        setinput(initialState)
                    }}>
                        <div className="form-group" >
                            <label>Email</label>
                            <input type="text" name={'email'} id="email" placeholder="Email" onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group" >
                            <label>Password</label>
                            <input type="password" id="password" placeholder="Password" name={'password'} onChange={handleInputChange}></input>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary">Login</button>
                            <Link href="/signup"><button className="btn btn-secondary">Sign Up</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )


}

export default Login; <h1>LOGIN</h1>