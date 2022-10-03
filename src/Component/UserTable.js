import React from 'react';
import './UserTable.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Usercomment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {console.log(props.users)}
         {props.users.length > 0 ? (
          props.users.map((user) => {
          //  const { id, name, comment } = user;
            return (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                <td>{user.comment}</td>
                <td>
                <p><FaTimes onClick={() => props.deleteUser(user.id)}  className="delIcon" /></p>
                 <p><FaPencilAlt onClick={() => props.editUser(user.id, user)}
                  className="editIcon" /></p>
                  {/* <button onClick={() => props.deleteUser(user.id)}> Delete</button>
                  <button onClick={() => props.editUser(user.id, user)}>
                    Edit </button> */}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )} 
      </tbody>
    </table>
  );
};

export default UserTable;

// import { FaTimes } from 'react-icons/fa';
// import { FaPen } from 'react-icons/fa';

// class UserTable extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
// const UserTable = (props) => {
//   // render() {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Usercomment</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.users.length > 0 ? (
//           props.users.map((user) => {
//             return (

//               <tr key={user.id}>
//                 {/* <td>{user.id}</td> */}
//                 <td>{user.name}</td>
//                 <td>{user.comment}</td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       props.editUser(user.id, user);
//                     }}
//                     // className='editIcon'
//                     className='button muted-button'
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => props.deleteUser(user.id)}
//                     className='button muted-button'
//                     // className='delIcon'
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })
//         ) : (
//           <tr>
//             <td colSpan={4}>No users</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
