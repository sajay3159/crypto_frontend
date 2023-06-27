import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
// import cors from "cors"


function Home() {
  let history = useNavigate();
  const handleDelete = (id)=>{
    var index = users.map(function(e){
      return e.id
    }).indexOf(id);
    users.splice(index,1)
    history('/');
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:5000/list')
        .then(response => {
          setUsers(response.data); // Assuming the API response is an array of user objects
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);

    console.log(users);

  
  return (
    <div>
    <Table striped bordered hover>
          <thead>
            <tr>
            <th>S.No.</th>
            <th>Id</th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item,i) => (
             <tr key={item._id}>
              <th>{i}</th>
              <th>{item._id}</th>
             <td>{item.name}</td>
             <td>{item.price}</td>
             <td>{item.qty}</td>
             <td>
              <Link to={'/edit'}>
              <Button onClick={()=> alert(item._id)}>Edit</Button>
              </Link>
             &nbsp;
             <Button onClick={()=> handleDelete(item._id)}>Delete</Button>
             </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Link className='d-grid gap-2'>
          <Button size="sm">Create</Button>
        </Link> */}
        </div>
  );
}

export default Home;
