import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function InputItem({addTodoList}) {

  const [newItem, setNewItem] = useState("")

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={(event) => {
        addTodoList(event, {name: newItem, id: uuidv4()});
        setNewItem("")
      }}
    >
      <input
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value);
        }}
        style={{ width: "250px", height: "30px" }}
      />
      <button type="submit" style={{ width: "150px", height: "30px" }}>
        Click
      </button>
    </form>
  );
}

export default InputItem