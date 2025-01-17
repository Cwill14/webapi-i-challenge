import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import List from './components/List';
import Form from './components/Form';

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const postUser = info => {
    axios
      .post('http://localhost:5000/api/users', info)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteUser = id => {
    // e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <h1>First Server!!!</h1>
      <List list={data} deleteUser={deleteUser} />
      <Form postUser={postUser} />
    </div>
  );
}

export default App;
