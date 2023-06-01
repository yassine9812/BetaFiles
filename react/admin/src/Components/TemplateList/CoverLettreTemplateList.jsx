import React, { useState } from 'react';
import './TemplateListStyle.css';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

const CoverLettreTemplateList = () => {
    const [rows, setRows] = useState([
        { id: 1,  name: 'Primo Template', Categorie:'Professianal' },
        { id: 2,  name: 'Cascade Template', Categorie:'Creatif' },
        { id: 3,  name: 'Canada Template', Categorie:'Canadian ' },
    
      ]);
      const [inputsVisible, setInputsVisible] = useState(false);
      const [inputName, setInputName] = useState('');
      const [inputCategorie, setInputCategorie] = useState('');
    
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
    
      const handleAddNewRow = () => {
        // Show the inputs for adding a new row
        setInputsVisible(true);
      };
    
      const handleAddRowSubmit = () => {
        // Generate a new row with a unique ID
        const newRow = {
          id: rows.length + 1,
          name: inputName,
          Categorie: inputCategorie,
        };
    
        // Add the new row to the state and hide the inputs
        setRows([...rows, newRow]);
        setInputsVisible(false);
        setInputName('');
        setInputCategorie('');
      };
    
      const handleCancelAddRow = () => {
        // Hide the inputs without adding a new row
        setInputsVisible(false);
        setInputName('');
        setInputCategorie('');
      };
    
      return (
        <div>
          <h2 style={{fontSize:'25px',marginLeft:'200px',marginTop:'50px'}} >Resume Template List</h2>
          <table style={{marginLeft:"200px", padding:'5px', border:'solide 1px'}} className='my-table' >
            <thead style={{padding:'5px', border:'solide 1px', background:'white solide 1px'}} >
              <tr>
                <th>Id</th>
                <th>Template Name</th>
                <th> Categorie </th>
                <th> Modifier </th>
                <th> Supprimer </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.Categorie}</td>
                  <td style={{height:'100px',display:'flex', flexDirection:'column'}} >
                    <span style={{display:'flex'}} onClick={() => handleModifierClick(row.id, 'name')} > <EditOutlined  /> Name </span> 
                    <span onClick={() => handleModifierClick(row.id, 'Categorie')} ><EditOutlined  /> Categorie </span> 
                  </td>
                  <td><DeleteFilled style={{color:'red', fontSize:'25px', marginLeft:'35px' }} onClick={() => handleSupprimerClick(row.id)} /></td>
                </tr>
              ))}
              {inputsVisible && (
                <tr>
                  <td></td>
                  <td><input type="text"  value={inputName} onChange={(e) => setInputName(e.target.value)} /></td>
                  <td><input type="text"  value={inputCategorie} onChange={(e) => setInputCategorie(e.target.value)} /></td>
                  <td colSpan={2}>
                    <button className='btn5' onClick={handleAddRowSubmit}>Add</button>
                    <button className='btn6' onClick={handleCancelAddRow}>Cancel</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
    
          {!inputsVisible && (
            <button className='btn5'  onClick={handleAddNewRow}>Add row</button>
          )}
        </div>
      );
}

export default CoverLettreTemplateList