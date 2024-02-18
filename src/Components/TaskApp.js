import React, { useState, useEffect } from 'react';

const TaskApp = (props) => {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  // State for new task input
  const [newTask, setNewTask] = useState('');
  // State for filter (all, completed, incomplete)
  const [filter, setFilter] = useState('all');

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTasks = [{ title: newTask, completed: false }, ...tasks];
      setTasks(newTasks);
      setNewTask('');
      props.showAlert("A task has been added to your to-do list app","successfully!!");
    }
  };

  // Toggle completed status of a task
  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    props.showAlert("Task Completed: By clicking the Completed button, you can view the completed tasks","successfully!!");

  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    props.showAlert("Task Deleted from Your To-Do List","successfully!!");
  };

  // Filter tasks based on completion status
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="container text-center mt-5">
      <h1 className='my-3'>To - Do App</h1>

      {/* Add new task form */}
      <div className="mb-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control d-inline-block"
          placeholder="Enter new task"
        />
        <button onClick={addTask} className="btn btn-primary ml-2 my-3">
          Add Task
        </button>
      </div>

      {/* Filter options */}
      <div className="mb-3">
        <button onClick={() => setFilter('all')} className="btn btn-secondary my-3 mx-3">
          All
        </button>
        <button onClick={() => setFilter('completed')} className="btn btn-success ml-2 my-3 mx-3">
          Completed
        </button>
        <button onClick={() => setFilter('incomplete')} className="btn btn-danger ml-2 my-3 mx-3">
          Incomplete
        </button>
      </div>

      {/* Task list */}
      <ul className="list-group text-left">
        {filteredTasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskStatus(index)}
              className="mr-2"
            />
            {task.title}
            <button onClick={() => deleteTask(index)} className="btn btn-danger btn-sm float-right my-3 mx-3">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;
