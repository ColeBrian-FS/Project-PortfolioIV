const Input = ({ value, name, placeholder, id, onChange }) => {
    return (<input value={value} name={name} placeholder={placeholder} id={id} onChange={onChange}  ></input>
    );
}

export default Input;