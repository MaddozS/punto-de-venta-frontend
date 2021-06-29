import { EInventoryStatus } from "shared/types/inventory";

const inventoryStatus = {
  [EInventoryStatus.EMPTY]: "Agotado",
  [EInventoryStatus.WITH_STOCK]: "Disponible",
  [EInventoryStatus.REQUIRE_MORE]: "Por Agotarse",
};

const getInventoryStatus = (status: EInventoryStatus) =>
  inventoryStatus[status];

export default getInventoryStatus;
