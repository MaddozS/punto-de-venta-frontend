import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Flex from "components/atoms/Flex";
import { toast } from "react-toastify";

interface IProductFormValues {
  name: string;
  price: number;
  description?: string;
}

interface IValidateFormValues {
  name: string;
  price: string;
  description?: string;
}

const validateFormValues = (values: IProductFormValues) => {
  const errors: Partial<IValidateFormValues> = {};
  if (!values.name) {
    errors.name = "El nombre es requerido";
  }
  if (!values.price) {
    errors.price = "El número es requerido";
  } else if (isNaN(values.price)) {
    errors.price = "Introduce un número válido";
  }
  return errors;
};

interface IProductForm {
  onSubmit: (values: IProductFormValues) => Promise<void>;
  onCancel: () => void;
  submitButtonLabel?: string;
  successMessage?: string;
}

const ProductForm = ({
  onSubmit,
  onCancel,
  submitButtonLabel = "Crear Producto",
  successMessage = "Se ha creado el producto exitosamente",
}: IProductForm) => {
  const onSubmitForm = async (values: IProductFormValues) => {
    try {
      await onSubmit(values);
      toast.success(successMessage);
      onCancel();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: undefined,
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
                <Field
                  label="Nombre *"
                  name="name"
                  variant="outlined"
                  component={TextField}
                />
                <Field
                  label="Precio *"
                  name="price"
                  variant="outlined"
                  component={TextField}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Field
                  label="Descripción"
                  name="description"
                  multiline
                  rows={6}
                  variant="outlined"
                  component={TextField}
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
                {submitButtonLabel}
              </Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export type { IProductFormValues };
export default ProductForm;
