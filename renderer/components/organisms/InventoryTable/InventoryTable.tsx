import Table, { ITableColumn } from "components/molecules/Table";
import useInventoryProvider from "hooks/inventory";
import getInventoryStatus from "utils/getInventoryStatus";
import type { IInventory } from "shared/types/inventory";

interface IInventoryTableRow {
  productName: string;
  available: number;
  status: string;
  recommended: number;
}

const parseInventory = (inventory: IInventory[]): IInventoryTableRow[] =>
  inventory.map(({ stock, status, minStockRecommended, product }) => ({
    productName: product?.name || "No disponible",
    available: stock,
    status: getInventoryStatus(status),
    recommended: minStockRecommended,
  }));

const inventoryTableColumns: ITableColumn[] = [
  {
    name: "Nombre del Producto",
    dataKey: "productName",
    key: "productName",
  },
  {
    name: "Disponible",
    dataKey: "available",
    key: "available",
  },
  {
    name: "Estado",
    dataKey: "status",
    key: "status",
  },
  {
    name: "Mínimo Recomendado",
    dataKey: "recommended",
    key: "recommended",
  },
];

const InventoryTable = () => {
  const { inventory, loadingInventory, errorLoadingInventory } =
    useInventoryProvider();
  const inventoryTableData = parseInventory(inventory);

  return (
    <Table
      ariaLabel="Tabla de Inventario"
      columns={inventoryTableColumns}
      data={inventoryTableData}
      loading={loadingInventory}
      error={errorLoadingInventory}
    />
  );
};

export default InventoryTable;
