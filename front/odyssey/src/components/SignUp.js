import React, {useState} from 'react';

const SignUp = (props) => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const [flash, setFlash] = useState({
        flash: ""
    });
    const updateInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
};
    
  const submitInput = (e) => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(
        res => setFlash({ flash: res.flash }),
        err => setFlash({ flash: err.flash })
      );
  };
    return(
<div>
    <h1>{JSON.stringify(form, 1, 1)}</h1>
    <h2>{flash.flash}</h2>
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