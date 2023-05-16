
import { useState } from "react";
import Button from './Button';
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    address: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    console.log("variable name:", name);
    console.log("object 1", { name: "test" });
    console.log("object 2", { [name]: "test" });

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit!", formData);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>name </label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <label>lastname </label>
        <input
          type="text"
          value={formData.lastname}
          name="lastname"
          onChange={handleChange}
        />
        <label>address </label>
        <input
          type="text"
          value={formData.address}
          name="address"
          onChange={handleChange}
        />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}

export default Form;
