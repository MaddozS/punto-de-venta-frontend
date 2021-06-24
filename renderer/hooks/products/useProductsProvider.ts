import { useContext } from "react";
import { ProductsContext } from "providers/ProductsProvider";

const useProducts = () => {
  const ProductsValue = useContext(ProductsContext);

  if (ProductsValue === undefined) {
    throw new Error("You must use useProducts within a ProductsProvider");
  }

  return ProductsValue;
};

export default useProducts;
