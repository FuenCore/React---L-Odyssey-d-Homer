import React, {useState} from 'react';

const SignUp = (props) => {
    const [form, setForm] = useState({
        email: ""
    });
    const updateInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
};
    return(
<div>
    <h1>{form.email}</h1>
    <input type="email" name="email" placeholder="email" onChange={updateInput}/>
</div>
    );
}

export default SignUp ;