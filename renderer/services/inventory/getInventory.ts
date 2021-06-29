import axios from "axios";
import environment from "shared/constants/environment";
import type { IInventory } from "shared/types/inventory";

const { apiUrl } = environment;

const getInventory = async () => {
  const axiosResponse = await axios.get<IInventory[]>(`${apiUrl}/inventory`);
  return axiosResponse.data;
};

export { getInventory };
