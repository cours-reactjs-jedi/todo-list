import React from "react";

function SearchBar({list, listFiltered, setListFiltered }) {

  function handleChange(event) {
    console.log("test");
    const value = event.target.value
    const tmpList = list.filter((item) => item.name.includes(value))
    console.log("list", list);
    console.log("list", tmpList);
    setListFiltered(tmpList)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label>SearchBar</label>
      <input onChange={handleChange} type="text" />
    </div>
  );
}

export default SearchBar;
