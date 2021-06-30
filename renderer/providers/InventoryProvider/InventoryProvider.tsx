import { FC } from "react";
import { InventoryContext, IInventoryContext } from "./InventoryContext";
import { useInventory } from "hooks/inventory";
import { useProducts } from "hooks/products";

const InventoryProvider: FC = ({ children }) => {
  const { inventory, loadingInventory, errorLoadingInventory } = useInventory();
  const { products } = useProducts();

  const contextValue: IInventoryContext = {
    inventory,
    loadingInventory,
    errorLoadingInventory,
    products,
  };

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
