import Joi from "joi"
const schema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .min(8)
        .max(20)
        .required()
})

const validate = input => {
    // error message from schema - returns undefined if correct.
    // value being sent to schema 
    const account = JSON.parse(localStorage.getItem('account'))
    console.log(account)

    const { error } = (schema.validate(input, { abortEarly: false }));
    if (!error) return null;
    console.log(error)
    const errors = {}
    for (let item of error.details)
        errors[item.path[0]] = item.message;

    return errors
}

// displays errors 
const handleErrorChange = err => {
    alert(`Errors
    ${err.email === undefined ? '' : err.email}
    ${err.password === undefined ? '' : err.password}`)

}

export default { validate, handleErrorChange };