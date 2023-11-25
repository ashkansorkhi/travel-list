import Item from "./item";

export default function PackingList({ items, setItem, Toggle, handleClick }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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
    </div>
  );
}
