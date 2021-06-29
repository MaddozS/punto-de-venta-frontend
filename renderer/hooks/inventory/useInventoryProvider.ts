import { useContext } from "react";
import { InventoryContext } from "providers/InventoryProvider";

const useInventoryProvider = () => {
  const inventoryValue = useContext(InventoryContext);

  if (inventoryValue === undefined) {
    throw new Error(
      "You must use useInventoryProvider within a InventoryProvider"
    );
  }

  return inventoryValue;
};

export default useInventoryProvider;
