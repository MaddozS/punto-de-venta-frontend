import { useContext } from "react";
import { ProductsContext } from "providers/ProductsProvider";

const useProductsProvider = () => {
  const ProductsValue = useContext(ProductsContext);

  if (ProductsValue === undefined) {
    throw new Error(
      "You must use useProductsProvider within a ProductsProvider"
    );
  }

  return ProductsValue;
};

export default useProductsProvider;
