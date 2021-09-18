import React, { useState, useEffect } from 'react';
import './App.css';
import Result from './Result';
import axios from 'axios';
import { uid } from 'uid';

function App() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      name: 'asd',
      address: 'dkasd'
    },
    {
      id: 2,
      name: 'das',
      address: 'asda'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    address: ''
  })


  useEffect(() => {
    axios.get('http://localhost:3004/posts')
      .then(res => {
        setDatas(res.data)
      })
  }, []);

  function handleChange(e) {
    let newPost = { ...formData };
    newPost[e.target.name] = e.target.value;
    setFormData(newPost);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newData = [...datas];

    let data = {
      id: uid(),
      name: formData.name,
      address: formData.address
    }

    newData.push(data);
    setDatas(newData);
    axios.post('http://localhost:3004/posts', data)
      .then(res => {
        alert("success")
      });

    setFormData({
      name: '',
      address: ''
    })




  }

  console.log(formData)
  return (
    <div className="app">
      {/* input */}
      <h1 className="text-center mt-5"> Simple CRUD </h1>
      <div class="card w-50 mt-3">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="addres" className="form-label">Address</label>
            <input type="text" className="form-control" id="addres" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {/* show relust */}
      <div class="card w-50 mt-5">
        <h2 className="text-center">Result</h2>
        <Result data={datas} />
      </div>
    </div>
  );
}

export default App;
