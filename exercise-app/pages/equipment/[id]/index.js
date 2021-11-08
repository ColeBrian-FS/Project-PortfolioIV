import React from 'react';
import { server } from "../../../config/server"
import Link from 'next/link'




const Equipment = () => {

    return (<>
        <h1>Equipment Detail</h1>
        <Link href="/dashboard">Go Back</Link>
    </>
    );
}


export default Equipment;