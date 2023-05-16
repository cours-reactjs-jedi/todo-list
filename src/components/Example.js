  function Example({color="blue", children}) {
  return (
    <h2 style={{color: color, opacity: "50%"}}>{children}</h2>
  )
}

export default Example