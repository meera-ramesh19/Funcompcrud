//code from https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage
//https://github.com/taniarascia/react-hooks/blob/master/src/App.js

import React, { useState, Fragment, useEffect } from 'react';
import AddUserForm from './Component/AddUserForm';
import EditUserForm from './Component/EditUserForm';
import UserTable from './Component/UserTable';

// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

const App = () => {
  // class App extends Component {

  //   // Data
  //   constructor() {
  //     super();
  //     this.state = {
  //       users: this.usersData,
  //       currentUser: this.initialUser,
  //       editing: false,
  //     };
  //   }

  const usersData = [
    { id: uuidv4(), name: 'Bob', comment: 'this is cool' },
    { id: uuidv4(), name: 'Bethany', comment: 'great job' },
  ];

  const initialFormState = { id: '', name: '', comment: '' };

  //Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  //Fetching from Local Storage
  const getUsers = JSON.parse(localStorage.getItem('userAdded'));

  // getUsers = JSON.parse(localStorage.getItem('commentAdded'));

  useEffect(() => {
    if (getUsers == null) {
      setUsers([]);
    } else {
      setUsers(getUsers);
    }
    // eslint-disable-next-line
  }, []);

  // componentDidMount() {
  //   if (this.getUsers == null) {
  //     this.setState({ users: [] });
  //   } else {
  //     this.setState({ users: this.getUsers });
  //   }
  // }

  //CRUD operations
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
    //  const newUser = { user.id, ...user };
    // console.log('users', newUser, id);
    //  setUsers([...users, newUser]);
    setUsers([...users, user]);

    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new task!',
    });

    localStorage.setItem('userAdded', JSON.stringify([...users, user]));
  };

  // addUser = (user) => {
  //   const id = uuidv4();
  //   console.log('inaddUser', user.name, user.usercomment, user.id);
  //   const newUser = { id, ...user };
  //   // console.log('users', newUser, id);
  //   // setUsers([...users, newUser]);
  //   this.setState([...this.state.users, newUser]);

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Yay...',
  //     text: 'You have successfully added a new task!',
  //   });

  //   localStorage.setItem(
  //     'commentAdded',
  //     JSON.stringify([...this.state.users, newUser])
  //   );
  // };

  const deleteUser = (id) => {
    setEditing(false);
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted a task!',
    });
  };
  //   localStorage.setItem('userAdded', JSON.stringify(deleteUser));
  // };

  // deleteUser = (id) => {
  //   this.setState({ editing: false });
  //   const deleteArr = this.state.users.filter((user) => user.id !== id);
  //   this.setState({ users: deleteArr });
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Oops...',
  //     text: 'You have successfully deleted a task!',
  //   });

  //   localStorage.setItem('commentAdded', JSON.stringify(deleteArr));
  // };

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, comment: user.comment });
  };

  // editUser = (id, user) => {
  //   this.setState({ editing: true });

  //   // this.setState({ currentUser: user });
  //   this.setState({
  //     currentUser: {
  //       id: user.id,
  //       name: user.name,
  //       comment: user.comment,
  //     },
  //   });
  // };

  const updateUser = (id, newUser) => {
    console.log('after editbutton press', id, newUser);
    setEditing(false);
    const userdata = users.map((user) => (user.id === id ? newUser : user));
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialFormState);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing task!',
    });

    localStorage.setItem('userAdded', JSON.stringify(userdata));
    // window.location.reload();
  };

  // updateUser = (id, newUser) => {
  //   const userdata = this.state.users.map((user) =>
  //     user.id === this.state.currentUser.id ? newUser : user
  //   );
  //   this.setState({
  //     users: this.state.users.map((user) =>
  //       user.id === this.state.currentUser.id ? newUser : user
  //     ),
  //   });
  //   this.setState({ currentUser: this.initialUser });
  //   this.setState({ editing: false });
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Yay...',
  //     text: 'You have successfully edited an existing task!',
  //   });

  //   localStorage.setItem('commentAdded', JSON.stringify(userdata));
  //   window.location.reload();
  // };

  // render() {
  return (
    <div className='container'>
      <h1>Comments CRUD</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h2>Edit Comment</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Comments</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h2>View Comments</h2>
          <UserTable
            users={users}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
  // }
};

export default App;
