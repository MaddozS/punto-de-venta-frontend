import { FC } from "react";
import { ProductsContext, IProductsContext } from "./ProductsContext";
import { useProducts } from "hooks/products";

const ProductsProvider: FC = ({ children }) => {
  const { products, loadingProducts, errorLoadingProducts } = useProducts();

  const contextValue: IProductsContext = {
    products,
    loadingProducts,
    errorLoadingProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
