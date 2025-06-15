import './App.css';
import Navbar from './Navbar.js';
import Alert from './Alert.js';
import TextForm from './TextForm.js';
//import About from './About.js';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    }) 
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161752';
      showAlert("Dark mode has been enabled!", "success")
    }else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled!", "success")
    }
  }

  return (
    <> 
    <Navbar title = 'TextUtil App' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading = 'Analyze the text here!!' mode={mode}/>
     {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
