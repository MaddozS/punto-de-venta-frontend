import { EInventoryStatus } from "./EInventoryStatus";
import type { IProduct } from "shared/types/product";

interface IInventory {
  _id: string;
  product: IProduct;
  stock: number;
  minStockRecommended: number;
  status: EInventoryStatus;
  createdAt: Date;
}

export type { IInventory };
