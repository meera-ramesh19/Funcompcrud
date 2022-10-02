import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';

// class EditUserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: this.props.currentUser,
//     };
//   }

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  // componentDidMount() {
  //   this.setState({ user: this.props.currentUser });
  // }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   this.setState({ ...this.state.user, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.comment) props.updateUser(user.id, user);
  };

  // render() {
  return (
    <form
    // onSubmit={(event) => {
    //   event.preventDefault();
    //   props.updateUser(user.id, user);
    // }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='comment'
        value={user.comment}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleSubmit}>
        Update user
      </button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
  //       <form
  //         onSubmit={(event) => {
  //           event.preventDefault();

  //           this.props.updateUser(this.state.user.id, this.state.user);
  //         }}
  //       >
  //         <label>Name</label>
  //         <input
  //           type='text'
  //           name='name'
  //           value={this.state.user.name}
  //           onChange={this.handleInputChange}
  //         />
  //         <label>Username</label>
  //         <input
  //           type='text'
  //           name='username'
  //           value={this.state.user.usercomment}
  //           onChange={this.handleInputChange}
  //         />
  //         <button>Update user</button>
  //         <button
  //           onClick={() => this.props.setState({ editing: false })}
  //           className='button muted-button'
  //         >
  //           Cancel
  //         </button>
  //       </form>
  //     );
  //   }
};
export default EditUserForm;
