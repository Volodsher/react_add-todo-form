// import React from 'react';

// export default class TodoForm extends React.Component {
//   state = {
//     text: '',
//     selectedOption: 0,
//     textError: null,
//     selectError: null,
//   };

//   handleChange = ({ target }) => {
//     if (this.state.text.length < 0 || this.state.text[0] === ' ') {
//       this.setState({
//         textError: 'Please write a task',
//       });
//     } else {
//       this.setState({
//         textError: '',
//       });
//     }

//     this.setState({
//       text: target.value.trimStart(),
//     });
//   }

//   handleSelect = ({ target }) => {
//     if (target.value < 1) {
//       this.setState({
//         selectError: 'Error! Please select a user',
//       });
//     }

//     this.setState({
//       selectedOption: target.value,
//       selectError: '',
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     if (this.state.text.length < 1) {
//       this.setState({
//         textError: 'Please enter what needs Todo',
//       });
//     }

//     if (this.state.selectedOption < 1) {
//       this.setState({
//         selectError: 'Please select User',
//       });
//     } else if (this.state.text.length < 1) {
//       this.setState({
//         textError: 'Please enter what needs Todo',
//       });
//     } else if (this.state.text === ' ') {
//       this.setState({
//         textError: 'Please enter what needs Todo',
//       });
//     } else if (this.state.text === '') {
//       this.setState({
//         textError: 'Please enter what needs Todo',
//       });
//     } else {

//       const newTodo = {
//         userId: Number(this.state.selectedOption),
//         id: this.state.newTodos.length + 1,
//         title: this.state.text,
//         completed: false,
//       };
//       this.setState(prevState => ({
//         newTodos: [...prevState.newTodos, newTodo],
//       }));
//       this.setState({
//         text: '',
//         selectedOption: 0,
//         textError: '',
//         selectError: '',
//       });

//     }
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.text}
//           onChange={this.handleChange}
//           placeholder="add a new task"
//         />
//         <p>
//           {this.state.textError}
//         </p>
//         <select
//           className="select"
//           value={this.state.selectedOption}
//           onChange={event => this.handleSelect(event)}
//         >
//           <option value={0}>
//             Choose a user
//           </option>
//           {this.state.newUsers.map(({ id, name }) => (
//             <option
//               value={id}
//               key={id}
//             >
//               {name}
//             </option>
//           ))}
//         </select>
//         <p>
//           {this.state.selectError}
//         </p>
//         <input
//           type="submit"
//           value="AddTodo"
//         />
//       </form>
//     );
//   }
// }