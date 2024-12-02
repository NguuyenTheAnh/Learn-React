import React from "react";

class AddUserInfo extends React.Component {
    // jsx: is used to write html in js code ( 1 jsx has only 1 element)
    state = { // state is js object (to control component data)
        name: '',
        age: ''
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        let listUsersClone = [...this.props.listUsers];
        let max = 0;
        listUsersClone.forEach((item) => {
            max = (max < item.id) ? item.id : max;
        })
        this.props.handleAddNewUser({
            id: max + 1,
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo;