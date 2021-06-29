import { FC } from "react";
import { InventoryContext, IInventoryContext } from "./InventoryContext";
import { useInventory } from "hooks/inventory";

const InventoryProvider: FC = ({ children }) => {
  const { inventory, loadingInventory, errorLoadingInventory } = useInventory();

  const contextValue: IInventoryContext = {
    inventory,
    loadingInventory,
    errorLoadingInventory,
  };

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
