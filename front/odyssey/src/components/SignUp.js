import React, {useState} from 'react';

const SignUp = (props) => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
  
    });
    const updateInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
};
    const submitInput = (event) => {
        event.preventDefault();	    
        console.log(form);
    }
    return(
<div>
    <h1>{JSON.stringify(form, 1, 1)}</h1>
    <form onSubmit={submitInput}>
    <input type="text" name="firstname" placeholder="firstname" onChange={updateInput} /> 
    <input type="text" name="lastname" placeholder="lastname" onChange={updateInput} /> 
    <input type="email" name="email" placeholder="email" onChange={updateInput}/>
    <input type="password" name="password" placeholder="password" onChange={updateInput} /> 
    <input type="password" name="passwordconf" placeholder="confirm password" onChange={updateInput} /> 
    <input type="submit" value="Submit"/>
    </form>
</div>
    );
}

export default SignUp ;