import { useState } from "react";
import Item from './components/Item';
import InputItem from './components/InputItem';
function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodoList (event, newItem) {
    event.preventDefault()
    setTodoList([...todoList, newItem])
  }

  function deleteItem(index) {
    setTodoList(todoList.filter((item, i) => (i !== index)));
  }
  return (
    <div>
      <InputItem addTodoList={addTodoList}/>
      <div style={{display: "flex", justifyContent: "center", paddingTop: "2%"}}>
      <div style={{width: "50%", display: "flex", flexDirection:"column", justifyContent: "center", paddingTop: "2%"}}>
        {todoList.map((item, index) => {
          return <Item key={item.id} item={item} onDelete={() => deleteItem(index)}/>;
        })}
        </div>
        </div>
    </div>
  );
}

export default App;
