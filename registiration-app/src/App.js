import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form'
import {app} from './firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'



function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
 
  
  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response)
    })
    }
    // console.log(id);
  }

  return (
      <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
        
        
        <Route path='/login' 
       
       element={
         <Form
         setEmail={setEmail}
         setPassword={setPassword}
         handleAction={() => handleAction(1)}
        title="Login"/>
      }
        />



        <Route path='/register'
        
        element={<Form 
          setEmail={setEmail}
          setPassword={setPassword}
          handleAction={() => handleAction(2)}
        title="Register"/>}/>
       
        </Routes>
      </header>
    </div>
      </Router>
  );
}

export default App;
