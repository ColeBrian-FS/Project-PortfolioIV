import React, { useState } from 'react';
import Input from '../components/input';
import { useRouter } from 'next/router';
import data from "../data"

const Workouts = () => {
    const router = useRouter()
    const initialstate = ""
    const [input, setinput] = useState(initialstate);
    return (
        <>
            <div className="form-container">
                <h1>Workouts</h1>
                <form onSubmit={e => {
                    e.preventDefault()
                    const schema = {
                        name: input,
                        allworkouts: []
                    }
                    localStorage.setItem("workouts", JSON.stringify(schema));
                    alert("Workout Created")
                    router.push('/dashboard')
                }}>
                    <div className="form-group">
                        <label htmlFor="workout-name">Workout Name</label>
                        <Input value={input} onChange={e => { setinput(e.target.value) }} id="workout-name" type="text" ></Input>
                    </div>
                    <button className="btn btn-primary" type='submit' >Submit</button>
                </form>

            </div>

        </>

    );
}

export default Workouts;