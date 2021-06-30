import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type ToDefineComboBoxEvent = any;

type TComboBoxValue = any;

interface IComboBox {
  options?: unknown[];
  optionLabel?: string;
  label: string;
  onValueSelected?: (value: TComboBoxValue) => void;
}

const ComboBox = ({
  label,
  options = [],
  optionLabel = "name",
  onValueSelected = (value) => {},
}: IComboBox) => {
  const onChange = (event: ToDefineComboBoxEvent, value: TComboBoxValue) => {
    onValueSelected(value);
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => (optionLabel ? option[optionLabel] : option)}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default ComboBox;
