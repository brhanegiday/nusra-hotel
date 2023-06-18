type Props = {
  label?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  Icon?: any;
  value?: string;
};

const inputStyle = {
  backgroundColor: "#fff",
  border: "1px solid #dddfe2",
  borderRadius: "8px",
  padding: "10px 12px",
  width: "100%",
  transition: "border-color 0.3s ease-in-out",
  paddingLeft: "2.5rem",
};

function InputForm({ label, type, id, placeholder, Icon }: Props) {
  return (
    <div>
      <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          className="input-airbnb appearance-none"
          placeholder={placeholder}
          //   onChange={handleNameChange}
          style={inputStyle}
        />
        {Icon}
      </div>
    </div>
  );
}

export default InputForm;
