import { FC } from "react";
import { InventoryContext, IInventoryContext } from "./InventoryContext";
import { createInventory as createInventoryMethod } from "services/inventory";
import { useInventory } from "hooks/inventory";
import { useProducts } from "hooks/products";
import type { ICreateInventory } from "shared/types/inventory";

const InventoryProvider: FC = ({ children }) => {
  const {
    inventory,
    loadingInventory,
    errorLoadingInventory,
    updateInventory,
  } = useInventory();
  const { products } = useProducts();

  const modifyInventory = async (body: ICreateInventory) => {
    const existingInventory = inventory.find(
      ({ product }) => body.product === product?._id
    );
    if (!existingInventory) {
      await createInventoryMethod(body);
    } else {
      // TODO update inventory instead
    }
    updateInventory();
  };

  const contextValue: IInventoryContext = {
    inventory,
    loadingInventory,
    errorLoadingInventory,
    products,
    modifyInventory,
  };

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
