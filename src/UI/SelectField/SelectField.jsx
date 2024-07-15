import { useDispatch } from "react-redux";
import Select from "react-select";
import "./SelectField.scss";

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "rgba(35, 35, 35, 1)",
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "rgba(255, 153, 0, 1)"
        : isFocused
        ? "rgb(255, 177, 60)"
        : "rgb(20, 19, 19)",
      ":active": {
        ...styles[":active"],
        backgroundColor: "rgba(255, 153, 0, 1)",
      },
    };
  },
};

function SelectUI({ options, setter, value, nothingValue = "Nothing here" }) {
  const dispatch = useDispatch();
  const dispatchValue = (value) => {
    dispatch(setter(value));
  };
  if (options.length > 0) {
    return (
      <Select
        value={value}
        options={options}
        styles={colourStyles}
        onChange={(choice) => {
          dispatchValue(choice);
        }}
      />
    );
  } else {
    return <p>{nothingValue}</p>;
  }
}

export default SelectUI;
