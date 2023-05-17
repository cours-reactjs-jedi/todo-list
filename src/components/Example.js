import useHello from "../hooks/useHello";

function Example({ color = "blue", children }) {
  const [age, sayHello, anniv] = useHello("marc", 5);

  return (
    <>
    <button onClick={anniv}>Click</button>
      <h2 style={{ color: color, opacity: "50%" }}>{children} ton age : {age}</h2>
    </>
  );
}

export default Example;
