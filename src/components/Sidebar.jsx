import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm OnAddItem={handleAddItem} />

      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
      />
    </div>
  );
}

export default Sidebar;
