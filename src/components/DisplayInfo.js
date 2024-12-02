import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// stateless and stateful
// function component (don't have keyword 'this')
const DisplayInfo = (props) => {
    const { listUsers } = props;//object

    const [isShowHideListUser, setShowHideListUser] = useState(true); // default value
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log('call render');
    useEffect(
        () => {
            console.log('call useEffect');
            if (listUsers.length == 0) {
                alert('You deleted all users');
            }
        }, [listUsers]
    )

    return (
        //Should have class parent
        <div className="display-info-container">
            <div>
                <span onClick={() => { handleShowHideListUser() }}>
                    {isShowHideListUser == true ? "Hide list users" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 20 ? "green" : "red"}>
                                <div> My name's {user.name}</div>
                                <div> My age's {user.age}</div>
                                <div><button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button></div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>

    );
}

export default DisplayInfo;