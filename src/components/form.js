import { useState } from "react";

export default function Form({ handleItem }) {
  // _____________________States____________________
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ____________________handle events_________________

  function handleSubmit(e) {
    e.preventDefault();
    handleItem({ description, quantity, packed: false, id: Date.now() });
    setQuantity(1);
    setDescription("");
  }
  function handleTextChange(e) {
    setDescription(e.target.value);
  }
  function handleSelectChange(e) {
    setQuantity(+e.target.value);
  }
  // _____________________JSX_________________________
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍 trip?</h3>
      <select onChange={handleSelectChange} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={handleTextChange}
        value={description}
        placeholder="item..."
      />
      <button>ADD</button>
    </form>
  );
}
