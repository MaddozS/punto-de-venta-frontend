import axios from "axios";
import { IProduct, ICreateProduct } from "shared/types/product";
import environment from "shared/constants/environment";

const { apiUrl } = environment;

const createProduct = async (body: ICreateProduct) => {
  const axiosResponse = await axios.post<IProduct>(`${apiUrl}/products`, {
    ...body,
  });
  return axiosResponse.data;
};

export { createProduct };
