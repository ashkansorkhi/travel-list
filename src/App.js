import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packingList";
import States from "./components/stats";
import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];
  // _____________________________States______________________________________
  const [items, setItem] = useState(initialItems);
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClick(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleItem(item) {
    setItem([...items, item]);
  }
  // _______________________component starts here____________________________
  return (
    <div className="app">
      <Logo />
      <Form handleItem={handleItem} />
      <PackingList
        items={items}
        setItem={setItem}
        Toggle={handleToggle}
        handleClick={handleClick}
      />
      <States items={items} />
    </div>
  );
}

export default App;
