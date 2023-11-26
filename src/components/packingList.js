import { useState } from "react";
import Item from "./item";

export default function PackingList({
  items,
  setItem,
  Toggle,
  handleClick,
  clearList,
}) {
  // _________________________________states________________________________
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  // __________________________________jsx__________________________________
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            items={items}
            setItem={setItem}
            Toggle={Toggle}
            handleClick={handleClick}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={clearList}>CLEAR LIST </button>
      </div>
    </div>
  );
}
