function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item }) {
  return (
    <li className="item">
      <label>
        {" "}
        <input type="checkbox" /> {item.name}
      </label>
      <button className="item__remove">❌</button>
    </li>
  );
}
