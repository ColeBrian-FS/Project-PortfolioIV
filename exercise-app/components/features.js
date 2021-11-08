import React from 'react';
import Container from "react-bootstrap/Container"
import { FaSearch, FaFilter, FaPlus } from 'react-icons/fa'

const Features = () => {
    return (<>
        <h1 className="feature-title">Features</h1>
        <div className="features-container">
            <div className="feature">
                <FaSearch className="icon" />
                <p>Search Workouts</p>
            </div>
            <div className="feature">
                <FaFilter className="icon" />
                <p>Sort by Muscle Group</p>
            </div>
            <div className="feature">
                <FaPlus className="icon" />
                <p>Add to Workout List</p>
            </div>
        </div>

    </>);
}

export default Features;