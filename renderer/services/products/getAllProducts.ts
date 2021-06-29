import axios from "axios";
import environment from "shared/constants/environment";
import type { IProduct } from "shared/types/product";

const { apiUrl } = environment;

const getAllProducts = async () => {
  const axiosResponse = await axios.get<IProduct[]>(`${apiUrl}/products`);
  return axiosResponse.data;
};

export { getAllProducts };
