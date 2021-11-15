import React from 'react';
import Link from "next/link"
import Form from '../components/form';

const SideNav = () => {
    const handleSearch = () => {
        console.log('sent')
    }
    return (
        <>
            <div className="side-nav">
                <div className="side-nav-content">
                    <div className="side-nav-form">
                        <Form search={handleSearch} />
                    </div>
                </div>
                <div className="side-nav-content">
                    <div className="nav-content">
                        <nav className="navbar-side">
                            <h3>Group by:</h3>
                            <ul className="nav-items">
                                <li><Link href="/equipment" as={'/equipment'} className="btn btn-primary"><a>Equipment</a></Link></li>
                                <li><Link href="/musclegroup" as={'/musclegroup'} className="btn btn-primary"  >Muscle Group</Link></li>
                                <li><Link href="/name" as={'/name'} className="btn btn-primary">Exercise Name</Link></li>
                                <li><Link href="/workout" as={'/workout'} className="btn btn-primary">All Workouts</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="side-nav-content">
                    <div className="search-info">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SideNav;