import { FormError, ValidationError } from "@formspree/react";

const FormInput = ({
  type,
  name,
  placeholder,
  required,
  label,
  span,
  value,
  onChange,
}: {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  label: string;
  span?: number;
  value: string;
  onChange: (event: any) => void;
}) => {
  return (
    <div className={`md:col-span-${span} sm:col-span-1`}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-100 pt-5"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};

export default FormInput;
