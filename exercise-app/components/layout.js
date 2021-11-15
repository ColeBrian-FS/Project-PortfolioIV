import TopNav from "./navbar";
import React from 'react'
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Exercise </title>
                <meta name="description" content="Brian Cole's Portfolio"></meta>
                <meta
                    property="og:title"
                    content="Brian Cole Portfolio."
                />
            </Head>
            <TopNav />
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