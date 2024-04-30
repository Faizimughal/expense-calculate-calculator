// // import React, { useState, useEffect } from 'react';

// // function TodoApp() {
// //   const [name, setName] = useState('');
// //   const [date, setDate] = useState('');
// //   const [todos, setTodos] = useState([]);

// //   useEffect(() => {
   
// //     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
// //     setTodos(storedTodos);
// //   }, []);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     if (name.trim() === '' || date === '') {
// //       alert('Please enter both name and date.');
// //       return;
// //     }

// //     const newTodo = { id: Date.now(), name, date }; 
// //     const updatedTodos = [...todos, newTodo];
// //     setTodos(updatedTodos);
// //     localStorage.setItem('todos', JSON.stringify(updatedTodos));

// //     setName('');
// //     setDate('');
// //   };

// //   const handleRemove = (id) => {
// //     const updatedTodos = todos.filter(todo => todo.id !== id);
// //     setTodos(updatedTodos);
// //     localStorage.setItem('todos', JSON.stringify(updatedTodos));
// //   };

// //   return (
// //     <div className="container">
      
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="name">Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <label htmlFor="date">Date:</label>
// //         <input
// //           type="date"
// //           id="date"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //       <ul>
// //         {todos.map(todo => (
// //           <li key={todo.id}>
// //             {todo.name} - {todo.date}
// //             <button onClick={() => handleRemove(todo.id)}>Remove</button>
// //           </li>
// //         ))}
// //       </ul>

      
// //     </div>
    
// //   );
// // }

// // export default TodoApp;






// // import React, { useState } from 'react';

// // const App = () => {
// //   const [name, setName] = useState('');
// //   const [date, setDate] = useState('');
// //   const[userData , setUserData] = useState('');



// //   const handleSubmit = () => {
    
// //     localStorage.setItem('name', name);
// //     localStorage.setItem('date', date);
// //     setUserData({
// //       name: title,
// //       date: date,
// //     });
// //     setName('');
// //     setDate('');
// //     console.log(localStorage.getItem('name'));
// //     console.log(localStorage.getItem('date'));
// //     console.log(userData);

// //   };

// //   return (
// //     <div>
// //       <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
// //       <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
// //       <button type='button' onClick={handleSubmit}>Submit</button>
// //     </div>
// //   );
// // };

// // export default App;



// // import React, { useState } from 'react';

// // const ToDoApp = () => {
// //   const [title, setTitle] = useState('');
// //   const [date, setDate] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [status, setStatus] = useState('pending');
// //   const [tasks, setTasks] = useState([]);
// //   const [editIndex, setEditIndex] = useState(null);

// //   const delData = () => {
// //     setTitle('');
// //     setDate('');
// //     setDescription('');
// //   };

// //   const handleAddTask = () => {
// //     if (editIndex !== null) {
// //       // If editing an existing task
// //       const updatedTasks = [...tasks];
// //       updatedTasks[editIndex] = { title, date, description, status };
// //       setTasks(updatedTasks);
// //       setEditIndex(null);
// //     } else {
// //       // If adding a new task
// //       const newTask = { title, date, description, status };
// //       setTasks([...tasks, newTask]);
// //     }
// //     delData();
// //   };

// //   const handleEditTask = (index) => {
// //     // Set the index of the task being edited
// //     const taskToEdit = tasks[index];
// //     setTitle(taskToEdit.title);
// //     setDate(taskToEdit.date);
// //     setDescription(taskToEdit.description);
// //     setStatus(taskToEdit.status);
// //     setEditIndex(index);
// //   };

// //   const handleDeleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks.splice(index, 1);
// //     setTasks(updatedTasks);
// //     setEditIndex(null); // Reset editIndex when a task is deleted
// //   };

// //   const handleStatusChange = (e) => {
// //     setStatus(e.target.value);
// //   };

// //   const filteredTasks = (status) => {
// //     return tasks.filter((task) => task.status === status);
// //   };

// //   return (
// //     <div>
// //       <label htmlFor="title">Title:</label>
// //       <input
// //         type="text"
// //         value={title}
// //         placeholder="title"
// //         onChange={(e) => setTitle(e.target.value)}
// //       />
// //       <br /> <br />
// //       <label htmlFor="date">Date:</label>
// //       <input
// //         type="date"
// //         value={date}
// //         onChange={(e) => setDate(e.target.value)}
// //       />
// //       <br /> <br />
// //       <label htmlFor="description">Description:</label>
// //       <input
// //         type="text"
// //         style={{ width: '200px', height: '50px' }}
// //         value={description}
// //         placeholder="description"
// //         onChange={(e) => setDescription(e.target.value)}
// //       />
// //       <br /> <br />
// //       <label htmlFor="status">Status:</label>
// //       <select value={status} onChange={handleStatusChange}>
// //         <option value="completed">Completed</option>
// //         <option value="pending">Pending</option>
// //         <option value="rejected">Rejected</option>
// //       </select>
// //       <br /> <br />
// //       <button
// //         type="submit"
// //         style={{ backgroundColor: 'green', color: 'white', margin: '3px' }}
// //         onClick={handleAddTask}
// //       >
// //         {editIndex !== null ? 'Update' : 'Add'}
// //       </button>
// //       <button
// //         type="button"
// //         style={{ backgroundColor: 'red', color: 'white', margin: '3px' }}
// //         onClick={delData}
// //       >
// //         Clear
// //       </button>

// //       <h2>Tasks</h2>
// //       <h3>Completed</h3>
// //       <ul>
// //         {filteredTasks('completed').map((task, index) => (
// //           <li key={index}>
// //             <strong>Title:</strong> {task.title} | <strong>Date:</strong>{' '}
// //             {task.date} | <strong>Description:</strong> {task.description}{' '}
// //             <button onClick={() => handleEditTask(index)}>Edit</button>{' '}
// //             <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h3>Pending</h3>
// //       <ul>
// //         {filteredTasks('pending').map((task, index) => (
// //           <li key={index}>
// //             <strong>Title:</strong> {task.title} | <strong>Date:</strong>{' '}
// //             {task.date} | <strong>Description:</strong> {task.description}{' '}
// //             <button onClick={() => handleEditTask(index)}>Edit</button>{' '}
// //             <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h3>Rejected</h3>
// //       <ul>
// //         {filteredTasks('rejected').map((task, index) => (
// //           <li key={index}>
// //             <strong>Title:</strong> {task.title} | <strong>Date:</strong>{' '}
// //             {task.date} | <strong>Description:</strong> {task.description}{' '}
// //             <button onClick={() => handleEditTask(index)}>Edit</button>{' '}
// //             <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ToDoApp;




// import React, { useState } from 'react';

// const ToDoApp = () => {
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('pending');
//   const [tasks, setTasks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const clearForm = () => {
//     setTitle('');
//     setDate('');
//     setDescription('');
//   };

//   const handleAddTask = () => {
//     if (!title.trim() || !date.trim() || !description.trim()) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newTask = { title, date, description, status };
//     if (editIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = newTask;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, newTask]);
//     }
//     clearForm();
//   };

//   const handleEditTask = (index) => {
//     const taskToEdit = tasks[index];
//     setTitle(taskToEdit.title);
//     setDate(taskToEdit.date);
//     setDescription(taskToEdit.description);
//     setStatus(taskToEdit.status);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       const updatedTasks = [...tasks];
//       updatedTasks.splice(index, 1);
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     }
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const filteredTasks = (status) => {
//     return tasks.filter((task) => task.status === status);
//   };

//   return (
//     <div>
//       <label htmlFor="title">Title:</label>
//       <input
//         type="text"
//         value={title}
//         placeholder="title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <br /> <br />
//       <label htmlFor="date">Date:</label>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <br /> <br />
//       <label htmlFor="description">Description:</label>
//       <input
//         type="text"
//         style={{ width: '200px', height: '50px' }}
//         value={description}
//         placeholder="description"
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <br /> <br />
//       <label htmlFor="status">Status:</label>
//       <select value={status} onChange={handleStatusChange}>
//         <option value="completed">Completed</option>
//         <option value="pending">Pending</option>
//         <option value="rejected">Rejected</option>
//       </select>
//       <br /> <br />
//       <button
//         type="submit"
//         style={{ backgroundColor: 'green', color: 'white', margin: '3px' }}
//         onClick={handleAddTask}
//       >
//         {editIndex !== null ? 'Update' : 'Add'}
//       </button>
//       <button
//         type="button"
//         style={{ backgroundColor: 'red', color: 'white', margin: '3px' }}
//         onClick={clearForm}
//       >
//         Clear
//       </button>

//       <h2>Tasks</h2>
//       {['completed', 'pending', 'rejected'].map((status) => (
//         <div key={status}>
//           <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
//           <ul>
//             {filteredTasks(status).map((task, index) => (
//               <li key={index}>
//                 <strong>Title:</strong> {task.title} | <strong>Date:</strong>{' '}
//                 {task.date} | <strong>Description:</strong> {task.description}{' '}
//                 <button onClick={() => handleEditTask(index)}>Edit</button>{' '}
//                 <button onClick={() => handleDeleteTask(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToDoApp;



