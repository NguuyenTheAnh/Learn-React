// class component
// function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component { // extends class Component of react
    state = {
        listUsers: [
            { id: 1, name: 'Anh', age: '20' },
            { id: 2, name: 'The Anh', age: '21' },
            { id: 3, name: 'Nguyen The Anh', age: '22' }
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);
        console.log(userId);
        this.setState({
            listUsers: listUsersClone
        });
    }
    render() {
        return (
            <div>
                <AddUserInfo
                    listUsers={this.state.listUsers}
                    handleAddNewUser={this.handleAddNewUser} />
                <br></br>
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser} />
            </div>
        );
    }
}

export default MyComponent;