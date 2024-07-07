import { useState } from "react";
import Item from './Item.js'

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [packedBy, setPackedBy] = useState("packed");
  function handleSortMethod(e) {
    setPackedBy(e.target.value);
  }

  let sortedItems;
  if (packedBy === "input") sortedItems = items;
  if (packedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (packedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={packedBy} onChange={(e) => handleSortMethod(e)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed state</option>☻
        </select>

        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}
