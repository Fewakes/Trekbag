import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ OnAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //basic validation
        if (!itemText) {
          alert("Item can't be empty");
          inputRef.current.focus();
          return;
        }

        OnAddItem(itemText);
        setItemText("");
      }}
    >
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
