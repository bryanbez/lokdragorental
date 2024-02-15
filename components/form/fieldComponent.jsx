export const FieldComponent = ({
  fieldId,
  label,
  value,
  onChange,
  fieldType,
  placeholder,
  min,
  max,
  fieldClass = "",
  labelClass = "",
  checked,
}) => {
  const showValueOfRange = fieldType == "range";
  const displayLabelAfterRadioBtn = fieldType == "radio";

  return (
    <label htmlFor={label} className={labelClass}>
      {showValueOfRange && `${label}: ${value}`}{" "}
      {/* if true, displays the value of range */}
      <input
        type={fieldType}
        id={fieldId}
        className={fieldClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        checked={checked}
      />
      {displayLabelAfterRadioBtn && `${label}`}
    </label>
  );
};
