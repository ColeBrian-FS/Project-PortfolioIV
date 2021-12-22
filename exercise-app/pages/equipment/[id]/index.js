import React from 'react';
import Link from 'next/link'



const Equipment = ({ exercise }) => {


    const { name, gifUrl, bodyPart, equipment, target } = exercise;

    const handleSubmit = () => {
        alert('handle Submit')
    }
    return (<>
        <div className="equipment-container">
            <div className='equipment'>

                <h1 className="equipment">{`${name}'s Details`}</h1>
                <h2>BodyPart: {bodyPart}</h2>
                <h2>Equipment: {equipment}</h2>
                <h3>Muscle Target: {target}</h3>
                <p>Video: <a href={gifUrl} target="_blank" rel="noreferrer">link</a></p>

                <div className='btn-container'>
                    <Link href="/dashboard">Go Back</Link>
                </div>
            </div>

        </div>

    </>
    );
}
export default Equipment;

// creating props to be displayed by static props 
export const getStaticProps = async (context) => {

    const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${context.params.id}`, {
        headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "ac819a08e2msh6beaecd882152c1p1188e5jsnf15223ffb4db"
        }
    })


    const exercise = await res.json()

    // return object
    return {
        props: {
            exercise,
        }
    }


}

//Dynamically creating paths for workouts 
export const getStaticPaths = async () => {
    // getting all exercises 

    const res = await fetch("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "ac819a08e2msh6beaecd882152c1p1188e5jsnf15223ffb4db"
        }
    })
        .then(res => res.json())
        .then(data => {

            console.log(data)
            return data
        })

    const exercises = res;


    const ids = exercises.map(exercise => exercise.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        // returns a 404 if doesnt exist
        fallback: false
    }

}