import { FC } from "react";
import { ProductsContext, IProductsContext } from "./ProductsContext";
import { createProduct as createProductMethod } from "services/products";
import { useProducts } from "hooks/products";
import type { ICreateProduct } from "shared/types/product";

const ProductsProvider: FC = ({ children }) => {
  const { products, loadingProducts, errorLoadingProducts, updateProducts } =
    useProducts();

  const createProduct = async (productData: ICreateProduct) => {
    await createProductMethod(productData);
    await updateProducts();
  };

  const contextValue: IProductsContext = {
    products,
    loadingProducts,
    errorLoadingProducts,
    createProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
