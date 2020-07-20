import React, { useState } from 'react';

export default function NameForm(props) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting name: ${name}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <input type="submit" value="Submit Name" />
        </form>

    )
}