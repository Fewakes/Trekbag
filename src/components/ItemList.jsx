import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

import { useItemsContext } from "../lib/hooks";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed;
        }

        if (sortBy == "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="PLACE HOLDER">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label
        onChange={() => {
          onToggleItem(item.id);
        }}
      >
        <input type="checkbox" checked={item.packed} /> {item.name}
      </label>
      <button className="item__remove" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
