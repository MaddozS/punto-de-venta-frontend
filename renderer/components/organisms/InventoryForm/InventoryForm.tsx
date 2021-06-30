import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Flex from "components/atoms/Flex";
import ComboBox from "components/molecules/ComboBox";
import { toast } from "react-toastify";
import useInventoryProvider from "hooks/inventory";
import type { IProduct } from "shared/types/product";

interface IProductFormValues {
  product: IProduct;
  available: number;
  recommended: number;
}

interface IValidateFormValues {
  product: string;
  available: string;
  recommended: string;
}

const validateFormValues = (values: IProductFormValues) => {
  const errors: Partial<IValidateFormValues> = {};
  if (!values.available) {
    errors.available = "El stock disponible es requerido";
  } else if (isNaN(values.available)) {
    errors.available = "Introduce un número válido";
  }
  if (!values.recommended) {
    errors.recommended = "El stock mínimo es requerido";
  } else if (isNaN(values.recommended)) {
    errors.recommended = "Introduce un número válido";
  }
  return errors;
};

interface IProductForm {
  onCancel: () => void;
}

const InventoryForm = ({ onCancel }: IProductForm) => {
  const { products } = useInventoryProvider();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
    undefined
  );

  const onSubmitForm = async (values: IProductFormValues) => {
    if (!selectedProduct) {
      toast.error("Debes seleccionar un producto");
      return;
    }
    try {
      // await onSubmit(values);
      toast.success("Se han guardado los cambios en el inventario.");
      onCancel();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onProductSelected = (product: IProduct) => {
    setSelectedProduct(product);
  };

  return (
    <Formik
      initialValues={{
        product: null,
        available: undefined,
        recommended: undefined,
      }}
      validate={validateFormValues}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex
            direction="column"
            justifyContent="space-between"
            height="100%"
            gap="32px"
          >
            <Flex gap="32px" direction="column">
              <Typography variant="h5">Nuevo Producto</Typography>
              <Flex gap="16px" direction="column">
                <ComboBox
                  options={products}
                  label="Producto"
                  onValueSelected={onProductSelected}
                />
                <Field
                  label="Stock *"
                  name="available"
                  variant="outlined"
                  component={TextField}
                  type="number"
                />
                <Field
                  label="Mínimo Recomendado *"
                  name="recommended"
                  variant="outlined"
                  component={TextField}
                  type="number"
                />
              </Flex>
            </Flex>
            <Flex justifyContent="flex-end" gap="16px">
              <Button
                variant="outlined"
                type="button"
                disabled={isSubmitting}
                onClick={onCancel}
              >
                Cancelar
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Guargar Cambios
              </Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export type { IProductFormValues };
export default InventoryForm;
