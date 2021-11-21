import React, { useEffect, useState } from 'react';
import workoutsList from '../data';
import Link from "next/link"
const Profile = ({ profile }) => {

    const [workouts, setworkouts] = useState([]);

    useEffect(() => {
        const workoutList = JSON.parse(localStorage.getItem('workouts'))
        setworkouts(workoutList)
    }, [!workouts]);




    return (<>
        {profile === null ? '' :
            <div className="profile">
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
                <h4>Workouts</h4>
                {/* All workouts  */}
                <ul>
                    {workouts.length === 0 ? <>
                        <p>No workouts. Create a new workout</p>
                        <Link href={'/workouts'}><a className="btn btn-secondary">Create a workout</a></Link>

                    </> :
                        <Link href={'/workout/[name]'} as={`/workout/${workouts.name}`}>{workouts.name}</Link>}
                </ul>
            </div>
        }
    </>);
}

export default Profile;

