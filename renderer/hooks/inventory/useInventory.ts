import { getInventory } from "services/inventory";
import { useFetchState } from "hooks/common";
import type { IInventory } from "shared/types/inventory";

const useInventory = () => {
  const {
    data: inventory,
    fetching: loadingInventory,
    error: errorLoadingInventory,
    fetchData: updateInventory,
  } = useFetchState<IInventory[]>({
    initialState: [],
    fetch: getInventory,
  });

  return {
    inventory,
    loadingInventory,
    errorLoadingInventory,
    updateInventory,
  };
};

export { useInventory };
