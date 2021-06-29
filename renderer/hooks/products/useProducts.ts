import { getAllProducts } from "services/products";
import { useFetchState } from "hooks/common";
import type { IProduct } from "shared/types/product";

const useProducts = () => {
  const {
    data: products,
    fetching: loadingProducts,
    error: errorLoadingProducts,
    fetchData: updateProducts,
  } = useFetchState<IProduct[]>({
    initialState: [],
    fetch: getAllProducts,
  });

  return {
    products,
    loadingProducts,
    errorLoadingProducts,
    updateProducts,
  };
};

export { useProducts };
