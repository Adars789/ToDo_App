import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TaskApp from './Components/TaskApp';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
          setAlert(null);
    },1000);
  }
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.classList.toggle('dark-mode', newMode === 'dark');  // styling the body
    showAlert(` ${newMode} mode has been enabled`,"success!! ")
    // document.title=`TO-Do App - ${newMode} mode enabled`
    setTimeout(()=>{
      document.title=`TO-Do App - ${newMode} mode enabled`
      },2000);
      setTimeout(()=>{
        document.title=`Install TO-Do List App Now`
        },1500);
          setTimeout(()=>{
            document.title=`Install TO-Do List App Now`
            },900);
  };

  return (
    <div>
      <Navbar title='TO - Do App' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TaskApp showAlert={showAlert} />
      <h6 style={{ textAlign: 'center' }}>
        Note: For the task you asked to be accomplished, please click the checkbox.
      </h6>
    </div>
  );
}

export default App;
