import {useState} from "react"

function useHello(name, age) {
  const [newAge, setNewAge] = useState(age || 1)

  function sayHello() {
    console.log("hello", name, "you are", age, "years old")
  }

  function anniv() {
    setNewAge(newAge + 1)
  }

  return [newAge, sayHello, anniv]  
}

export default useHello