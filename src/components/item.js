export default function Item({ item, setItem, Toggle, handleClick }) {
  return (
    <li>
      <span className={`${item.packed ? "packed" : null}`}>
        <input type="checkbox" onChange={() => Toggle(item.id)} /> {item.quantity}{" "}
        {item.description} <button onClick={() => handleClick(item.id)}>❌</button>
      </span>
    </li>
  );
}
