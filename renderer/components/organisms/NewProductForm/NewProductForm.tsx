import ProductForm, {
  IProductFormValues,
} from "components/molecules/ProductForm";
import useProductsProvider from "hooks/products";

interface INewProductForm {
  onCancel: () => void;
}

const NewProductForm = (props: INewProductForm) => {
  const { createProduct } = useProductsProvider();

  return <ProductForm onSubmit={createProduct} {...props} />;
};

export default NewProductForm;
