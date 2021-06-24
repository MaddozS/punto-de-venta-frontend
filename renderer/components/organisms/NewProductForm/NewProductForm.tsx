import ProductForm, {
  IProductFormValues,
} from "components/molecules/ProductForm";

interface INewProductForm {
  onCancel: () => void;
}

const NewProductForm = (props: INewProductForm) => {
  const onSubmit = async (values: IProductFormValues) => {
    console.log({ values });
  };

  return <ProductForm onSubmit={onSubmit} {...props} />;
};

export default NewProductForm;
