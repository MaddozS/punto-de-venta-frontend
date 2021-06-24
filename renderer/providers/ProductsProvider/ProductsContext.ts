import { createContext } from "react";
import type { IProduct, ICreateProduct } from "shared/types/product";

interface IProductsContext {
  products: IProduct[];
  loadingProducts: boolean;
  errorLoadingProducts: boolean;
  createProduct: (productData: ICreateProduct) => Promise<void>;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

export { ProductsContext };
export type { IProductsContext };
