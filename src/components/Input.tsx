interface InputProps {
  type: string | 'text' | 'number' | 'textarea' | 'url';
  placeholder: string;
  value: string | number;
  handleInput: React.ChangeEventHandler;
  name: string;
  required: boolean;
}

function Input({
  type,
  placeholder,
  value,
  handleInput,
  name,
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      className="border px-4 py-2 rounded w-full outline-0 text-sky-700 italic"
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
      name={name}
      required={required}
    />
  );
}

export { Input };
