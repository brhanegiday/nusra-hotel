import { ChangeEvent } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  Icon?: any;
  value?: string;
}

const inputStyle = {
  backgroundColor: "#fff",
  border: "1px solid #dddfe2",
  borderRadius: "8px",
  padding: "10px 12px",
  width: "100%",
  transition: "border-color 0.3s ease-in-out",
  paddingLeft: "2.5rem",
};

function InputForm({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
  Icon,
}: InputFormProps) {
  let pattern;
  let patternErrorMessage;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name === "email") {
    pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    patternErrorMessage = "Invalid email address";
  }
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          className="input-airbnb appearance-none text-gray-800"
          placeholder={placeholder}
          style={inputStyle}
          {...register(name, {
            required: true,
            pattern: name === "email" ? emailPattern : undefined,
          })}
        />
        {Icon}
      </div>
      {errors[name]?.type === "required" && (
        <span className="text-red-500">This field is required.</span>
      )}
      {errors[name]?.type === "pattern" && (
        <span className="text-red-500">Invalid email address.</span>
      )}
    </div>
  );
}

export default InputForm;
