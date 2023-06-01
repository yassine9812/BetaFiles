import React, { useState } from 'react';
import './UserListStyle.css';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

function UserList() {
  const [rows, setRows] = useState([
    { id: 1,  name: 'Ahmed jlassi', mail:'Ahmedjlassi@gmail.com', password:'********' },
    { id: 2,  name: 'Aymen hedhili', mail:'Aymenhedhili@gmail.com', password:'********' },
    { id: 3,  name: 'Bassem tbarqi', mail:'Bassemtbarqi@gmail.com', password:'********' },
    { id: 4,  name: 'Sami mohsnni', mail:'Samimohsnni@gmail.com', password:'********' },

  ]);

  const handleModifierClick = (rowId, fieldToModify) => {
    // Show a prompt asking the user to enter a new value for the field
    const newValue = prompt(`Enter a new ${fieldToModify} for row with id ${rowId}`, rows.find(row => row.id === rowId)?.[fieldToModify]);

    // If the user didn't cancel the prompt, update the value in the state for the corresponding row
    if (newValue !== null) {
      const newRows = rows.map(row => {
        if (row.id === rowId) {
          return {
            ...row,
            [fieldToModify]: newValue,
          }
        } else {
          return row;
        }
      });
      setRows(newRows);
    }
  };

  const handleSupprimerClick = (rowId) => {
    // Do something when supprimer button is clicked
    console.log(`Supprimer clicked for row with id ${rowId}`);
    const newRows = rows.filter((row) => row.id !== rowId);
    setRows(newRows);
  };

  return (
    <div className='container' >
      <h2>User List</h2>
      <table style={{marginLeft:"200px", padding:'5px', border:'solide 1px'}} className='my-table' >
        <thead style={{padding:'5px', border:'solide 1px', background:'white solide 1px'}} >
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th> User Mail </th>
            <th> User Password </th>
            <th> Modifier </th>
            <th> Supprimer </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.mail}</td>
              <td>{row.password}</td>
              <td style={{height:'100px',display:'flex', flexDirection:'column'}} >
              <span style={{display:'flex'}} onClick={() => handleModifierClick(row.id, 'name')} > <EditOutlined  /> Name </span> 
              <span onClick={() => handleModifierClick(row.id, 'mail')} ><EditOutlined  /> Mail </span> 
              <span onClick={() => handleModifierClick(row.id, 'password')} ><EditOutlined  /> Password </span> 
              </td>
              <td><DeleteFilled style={{color:'red', fontSize:'25px', marginLeft:'35px' }} onClick={() => handleSupprimerClick(row.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;