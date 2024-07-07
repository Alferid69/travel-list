export default function Stats({ itemObj }) {
  if (!itemObj.length)
    return (
      <p className="stats">
        <em>start adding packing list.</em>
      </p>
    );
  const numItems = itemObj.length;
  const packedNumber = itemObj.filter((item) => item.packed).length;
  const packedPercentage = (packedNumber / numItems) * 100;
  return (
    <footer className="stats ">
      <em>
        {packedPercentage === 100
          ? "you are done."
          : `💼 You have ${numItems} items in your list, and you already packed
        ${packedNumber} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
