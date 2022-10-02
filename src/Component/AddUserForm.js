import React, { useState } from 'react';

const AddUserForm = (props) => {
  let initialFormState = { id: null, name: '', comment: '' };
  const [user, setUser] = useState(initialFormState);
  // class AddUserForm extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       user: this.initialFormState,
  //     };
  //   }

  initialFormState = { id: null, name: '', comment: '' };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log('name', event.target.name, event.target.value);
  //   this.setState({ ...this.state.user, [name]: value });
  //   console.log(this.state.user);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.comment) {
      handleInputChange(e, props.addUser(user));
    }
  };
  //    handleSubmit = e => {
  //     e.preventDefault();
  //     if (this.state.user.name && this.state.user.usercomment) {
  //         this.handleChange(e, this.props.addUser(this.state.user));
  //     }
  // }

  // render() {
  return (
    <form
    // onSubmit={(event) => {
    //   event.preventDefault();
    //   if (!user.name || !user.username) return;

    //   props.addUser(user);
    //   setUser(initialFormState);
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
        Add new user
      </button>
    </form>
  );
  //     <form
  //       onSubmit={(event) => {
  //         event.preventDefault();
  //         if (!this.state.user.name || !this.state.user.comment) return;
  //         this.props.addUser(this.state.user);
  //         this.setState({ user: this.initialFormState });
  //       }}
  //     >
  //       <label>Name:   </label>
  //       <input style={{margin:'0.5rem 0'}}
  //         type='text'
  //         name='name'
  //         id='name'
  //         value={this.state.user.name}
  //         onChange={this.handleInputChange}
  //       />
  //       <br/>
  //       <label>Comments:   </label>
  //       <input style={{margin:'0.5rem 0'}}
  //         type='text'
  //         name='comment'
  //         id='comment'
  //         value={this.state.user.comment}
  //         onChange={this.handleInputChange}
  //       />
  //       <br/>
  //       <button style={{margin:'0.5rem 0'}}>Add new comment</button>
  //       {/* <button onClick={this.handleSubmit} >Add new comment</button> */}
  //     </form>
  // );
  // }
};
export default AddUserForm;

// import React, { useState, Component } from 'react';

// // const AddUserForm = props => {
// // const initialFormState = { id: null, name: '', username: '' }
// // const [ user, setUser ] = useState(initialFormState)
// class AddUserForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: this.initialFormState,
//     };
//   }

//   initialFormState = { id: null, name: '', username: '' };

//   //  handleInputChange = event => {
//   // 	const { name, value } = event.target

//   // 	setUser({ ...user, [name]: value })
//   // }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log(event.target.name, event.target.value);

//     this.setState({ ...this.state.user, [name]: value });
//   };

//   render() {
//     return (
//       // <form
//       // 	onSubmit={event => {
//       // 		event.preventDefault()
//       // 		if (!user.name || !user.username) return

//       // 		props.addUser(user)
//       // 		setUser(initialFormState)
//       // 	}}
//       // >
//       // 	<label>Name</label>
//       // 	<input type="text" name="name" value={user.name} onChange={handleInputChange} />
//       // 	<label>Username</label>
//       // 	<input type="text" name="username" value={user.username} onChange={handleInputChange} />
//       // 	<button>Add new user</button>
//       // </form>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (!this.state.user.name || !this.state.user.usercomment) return;

//           this.props.addUser(this.state.user);
//           this.setState({ user: this.initialFormState });
//         }}
//       >
//         <label>Name</label>
//         <input
//           type='text'
//           name='name'
//           defaultValue={this.state.user.name}
//           onChange={this.handleInputChange}
//         />
//         <label>Username</label>
//         <input
//           type='text'
//           name='usercomment'
//           defaultValue={this.state.user.username}
//           onChange={this.handleInputChange}
//         />
//         <button>Add new user</button>
//       </form>
//     );
//   }
// }
// export default AddUserForm;
