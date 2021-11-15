import React from 'react';
import Link from "next/link"
const Login = () => {
    return (
        <>
            <h1>LOGIN</h1>
            <div>
                <form>
                    <div> <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div> <label>Password</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <button>Login</button>
                        <Link href="/signup"><a>Sign Up</a></Link>
                    </div>
                </form>


            </div>

        </>
    )


}

export default Login; <h1>LOGIN</h1>