import Joi from "joi-browser"
import React, { useState } from 'react';
import Input from "./input";


const Form = ({ search }) => {

    const initialState = { search: "" }
    const [inputfield, setInputField] = useState(initialState)


    const handleInputChange = event => {

        const { name, value } = event.target

        setInputField({ ...inputfield, [name]: value })

        console.log(inputfield)
    }


    return (<>
        <form onSubmit={e => {
            e.preventDefault()
            search(inputfield)
            setInputField(initialState)
        }}>

            <div className="form-group">

                <Input
                    value={inputfield.title}
                    name={"search"}
                    className={''}
                    id={"search"}
                    onChange={handleInputChange}
                ></Input>


                <button className="btn btn-primary" type='submit' >Submit</button>
            </div>

        </form>
    </>
    )
}

export default Form;