import React from 'react'
import { useState, useContext } from 'react';
import { myTheme as themes, ThemeContext } from '../Theme';
import Button from './Button';

function Item({item, onDelete, onCheck}) {

  const {theme} = useContext(ThemeContext)

  const [checked, setChecked] = useState(item.checked || false);

  function handleChecked() {
    onCheck(!checked);
    setChecked(!checked)
  }
  return (
    <div style={{background: themes?.[theme]?.itemColor ,margin: "2%", display: "flex", justifyContent:"space-between"}}>
      <input type="checkbox" checked={checked} onChange={handleChecked}/>
      <p>{item.name}</p>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
}

export default Item