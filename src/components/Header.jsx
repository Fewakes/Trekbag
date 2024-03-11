import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}

export default Header;
