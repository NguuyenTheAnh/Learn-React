import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// stateless and stateful
// class DisplayInfo extends React.Component {
//     //props -> stand for properties (transfer data from parent to child component)
//     render() {
//         console.log('call render');
//         //destructuring array, object
//         const { listUsers } = this.props;
//         return (
//             //Should have class parent
//             <div className="display-info-container">
//                 {/* <img src={logo} /> */}
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 20 ? "green" : "red"}>
//                                     <div> My name's {user.name}</div>
//                                     <div> My age's {user.age}</div>
//                                     <div><button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button></div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>

//         );
//     }
// }

// function component
const DisplayInfo = (props) => {
    const { listUsers } = props;
    return (
        //Should have class parent
        <div className="display-info-container">
            {/* <img src={logo} /> */}
            {true &&
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