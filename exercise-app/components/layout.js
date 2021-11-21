import TopNav from "./navbar";
import React, { useEffect, useState } from 'react'
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
const Layout = ({ children }) => {
    const [user, setuser] = useState();
    useEffect(() => {
        const account = localStorage.getItem('account')
        setuser(JSON.parse(account))
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('account')
        setuser(undefined)
    }
    return (
        <React.Fragment>
            <Head>
                <title>Exercise App </title>
                <meta name="description" content="Brian Cole's Portfolio - Exercise App"></meta>
                <meta
                    property="og:title"
                    content="Brian Cole Portfolio."
                />
            </Head>
            <TopNav profile={user} logout={handleLogout} />
            <div>
                <main >
                    {children}
                </main>
            </div>
            <footer>© 2017–2021 Company, Inc</footer>
        </React.Fragment>
    );
}


export default Layout;