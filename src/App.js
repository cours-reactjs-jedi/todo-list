import { useState, useEffect, useReducer} from "react";
import Item from "./components/Item";
import InputItem from "./components/InputItem";
import { myTheme as themes, ThemeContext } from "./Theme";
import Button from './components/Button';
// import Example from "./components/Example"
import SearchBar from './components/SearchBar';

  function reducer (list, action) {
    switch(action.type) {
      case "delete":
        return list.filter((_, i) => i !== action.index)
      case "check":
        return  list.map((item, i) => {
        if (i === action.index) {
          item.checked = action.check;
        }
        return item;
      })
      case "add":
        return [...list, action.newItem]
      case "set":
        return action.list
      default: 
        throw new Error("This action does not exist")
    }
  }

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [listFiltered, setListFiltered] = useState ([])
  const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || []
  const [todoList, dispatch] = useReducer(reducer, initialTodoList)

  const listDisplay = listFiltered?.length > 0 ? listFiltered : todoList

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  // const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem("todoList")) || []
  // );


  useEffect(() => {
    console.log("useEffect");
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: themes[theme].background,
          color: themes[theme].color,
        }}
      >
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <InputItem addTodoList={(newItem) => {dispatch({type: "add", newItem})}} />
<hr/>
        <SearchBar  list={todoList} listFiltered={listFiltered} setListFiltered={setListFiltered}/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "2%",
            }}
          >
            {listDisplay.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onDelete={() => dispatch({type:"delete", index})}
                  onCheck={(check) => dispatch({type: "check", index, check})}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
