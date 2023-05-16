import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

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
        event.preventDefault()
        addTodoList({name: newItem, id: uuidv4()});
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
      <Button type="submit" style={{ width: "150px", height: "30px" }}>
        Click
      </Button>
    </form>
  );
}

export default InputItem