import axios from "axios";
import { IInventory, ICreateInventory } from "shared/types/inventory";
import environment from "shared/constants/environment";

const { apiUrl } = environment;

const createInventory = async (body: ICreateInventory) => {
  const axiosResponse = await axios.post<IInventory>(`${apiUrl}/inventory`, {
    ...body,
  });
  return axiosResponse.data;
};

export { createInventory };
