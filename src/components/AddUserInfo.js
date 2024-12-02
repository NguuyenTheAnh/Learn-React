import React, { useState } from "react";

//react hook
//use useState to set property
const AddUserInfo = (props) => {
    const { listUsers, handleAddNewUser } = props; // destructuring and get data from parent

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        let max = 0;
        listUsers.forEach((item) => {
            max = (max < item.id) ? item.id : max;
        });
        handleAddNewUser({
            id: max + 1,
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeInput(event) }}
                />

                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;