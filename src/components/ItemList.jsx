function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label
        onChange={() => {
          handleToggleItem(item.id);
        }}
      >
        <input type="checkbox" checked={item.packed} /> {item.name}
      </label>
      <button
        className="item__remove"
        onClick={() => handleDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
