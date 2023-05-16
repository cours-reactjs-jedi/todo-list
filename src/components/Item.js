import React from 'react'
import { useState } from 'react';

function Item({item, onDelete, onCheck}) {

  const [checked, setChecked] = useState(item.checked || false);

  function handleChecked() {
    onCheck();
    setChecked(!checked)
  }

  return (
    <div style={{display: "flex", justifyContent:"space-between"}}>
      <input type="checkbox" checked={checked} onChange={handleChecked}/>
      <p>{item.name}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Item