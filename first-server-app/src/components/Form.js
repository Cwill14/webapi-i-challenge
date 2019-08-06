import React, { useState } from 'react';

const Form = props => {
    
    const [formValues, setFormValues] = useState({
        name: '',
        bio: ''
    });
    
    const submit = () => {
        // e.preventDefault();
        props.postUser(formValues);
        setFormValues({
            name: '',
            bio: ''
        })
    }

    const handleChanges = e => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
 
    return (
        <div>
            <h2>Add a Character</h2>
            <form className="form" onSubmit={submit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name" 
                    value={formValues.name}
                    onChange={handleChanges}
                />
                <textarea
                    name="bio"
                    placeholder="bio"
                    rows="3"
                    cols="50"
                    value={formValues.bio}
                    onChange={handleChanges}
                >
                </textarea>
                <button>Add to List</button>
            </form>
        </div>
    );
};

export default Form;