import Joi from "joi"
// schema object for validating name email password and rentered password.
const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .min(8)
        .max(20)
        .required(),
    access_token: [
        Joi.string(),
        Joi.number()
    ],
    repeat_password: Joi.ref('password'),
})
    .with('name', 'email')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');



//  validates user input 
const validate = input => {
    // error message from schema - returns undefined if correct.
    // value being sent to schema 
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
     ${err.name === undefined ? '' : err.name} 
    ${err.email === undefined ? '' : err.email}
    ${err.password === undefined ? '' : err.password}`)

}


export default { validate, handleErrorChange };