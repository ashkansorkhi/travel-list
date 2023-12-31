export default function States({ items }) {
  let packedItems = 0;
  items.map((item) => (item.packed ? (packedItems += 1) : packedItems));
  const persentage = Math.round((packedItems / items.length) * 100);
  return (
    <footer className="stats">
      {items.length >= 1 ? (
        <em>
          {" "}
          You have {items.length} items on your list, and you already packed{" "}
          {packedItems} ({persentage} %)
        </em>
      ) : (
        <em>ADD your items and Pack! </em>
      )}
    </footer>
  );
}
