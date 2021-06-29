import { createContext } from "react";
import type { IInventory } from "shared/types/inventory";

interface IInventoryContext {
  inventory: IInventory[];
  loadingInventory: boolean;
  errorLoadingInventory: boolean;
}

const InventoryContext = createContext<IInventoryContext | undefined>(
  undefined
);

export { InventoryContext };
export type { IInventoryContext };
