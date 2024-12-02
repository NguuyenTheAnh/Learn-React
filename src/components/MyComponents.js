// class component
// function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Anh', age: '20' },
        { id: 2, name: 'The Anh', age: '21' },
        { id: 3, name: 'Nguyen The Anh', age: '22' }
    ]);
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    }
    const handleDeleteUser = (userId) => {
        setListUsers(listUsers.filter((item) => item.id != userId));
    }
    return (
        <div>
            <AddUserInfo
                listUsers={listUsers}
                handleAddNewUser={handleAddNewUser} />
            <br></br>
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser} />
        </div>
    );
}

export default MyComponent;