import { createContext } from "react";
import type { IProduct } from "shared/types/product";

interface IProductsContext {
  products: IProduct[];
  loadingProducts: boolean;
  errorLoadingProducts: boolean;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

export { ProductsContext };
export type { IProductsContext };
