import { useState, useEffect } from "react";
import Item from './components/Item';
import InputItem from './components/InputItem';
function App() {



  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  function addTodoList (event, newItem) {
    event.preventDefault()
    setTodoList([...todoList, newItem])
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function deleteItem(index) {
    setTodoList(todoList.filter((item, i) => (i !== index)));
  }

  function checkItem(index) {
    setTodoList(todoList.map((item, i) => {
      if (i === index) {
        item.checked = ! item.checked;
      }
      return item;
    }));
  }
  return (
    <div>
      <InputItem addTodoList={addTodoList}/>
      <div style={{display: "flex", justifyContent: "center", paddingTop: "2%"}}>
      <div style={{width: "50%", display: "flex", flexDirection:"column", justifyContent: "center", paddingTop: "2%"}}>
        {todoList.map((item, index) => {
          return <Item key={item.id} item={item} onDelete={() => deleteItem(index)} onCheck={() => checkItem(index)} />;
        })}
        </div>
        </div>
    </div>
  );
}

export default App;
