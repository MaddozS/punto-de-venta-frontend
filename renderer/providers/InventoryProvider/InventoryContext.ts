import { createContext } from "react";
import type { IInventory, ICreateInventory } from "shared/types/inventory";
import type { IProduct } from "shared/types/product";

interface IInventoryContext {
  inventory: IInventory[];
  loadingInventory: boolean;
  errorLoadingInventory: boolean;
  products: IProduct[];
  modifyInventory: (body: ICreateInventory) => Promise<void>;
}

const InventoryContext = createContext<IInventoryContext | undefined>(
  undefined
);

export { InventoryContext };
export type { IInventoryContext };
