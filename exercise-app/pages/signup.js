import React, { useState } from 'react';
import Link from "next/link"
import validation from '../components/services/sign up validation';
import { useRouter } from 'next/router';
import Head from "next/head"
const SignUp = () => {
    const router = useRouter()
    const initialState = { name: '', email: "", password: "", repeat_password: "", }
    const workouts = []
    const [input, setinput] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        //sets the input value based on the name of the input data 
        setinput({ ...input, [name]: value })
    }
    const handleSubmit = e => {
        alert("Account Created!")
        localStorage.setItem(`account`, JSON.stringify(e))
        localStorage.setItem(`workouts`, JSON.stringify(workouts))
        router.push('/login')
    }


    return (<>

        <Head>
            <title>sign up</title>
            <meta name="description" content="Brian Cole's Portfolio - Exercise App"></meta>
            <meta
                property="og:title"
                content="Brian Cole Portfolio."
            />
        </Head>
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={e => {
                e.preventDefault()
                // validating user input. 
                let err = validation.validate(input)
                err != null ?
                    validation.handleErrorChange(err) :
                    handleSubmit(input)
                setinput(initialState)

            }} >

                <div className="form-group" >
                    <label href="name">Name</label>
                    <input type="text" placeholder="Name" id="name" name={'name'} value={input.name} onChange={handleInputChange}  ></input>
                    <span className="error">Error Name</span>
                </div>
                <div className="form-group" >
                    <label href="email">Email Address</label>
                    <input type="email" placeholder="Email" id="email" name={'email'} value={input.email} onChange={handleInputChange}  ></input>
                    <span className="error">Error Email</span>
                </div>
                <div className="form-group" >
                    <label href="password">Password</label>
                    <input type="password" placeholder="Password" id="password" name={'password'} value={input.password} onChange={handleInputChange}   ></input>
                    <span className="error">Error Password</span>

                </div>
                <div className="form-group" >
                    <label htmlFor="renter-password">Re-Enter Password</label>
                    <input type="password" placeholder="Re-Password" id="renter-password" name={'repeat_password'} value={input.repeat_password} onChange={handleInputChange}  ></input>
                    <span className="error">Error Re-enter Password</span>

                </div>
                <button className="btn btn-primary" type="submit">Create a Account</button>
                <Link href="/login" className="btn btn-secondary">Already have an account? Click here.</Link>
            </form>


        </div>

    </>
    );
}

export default SignUp;