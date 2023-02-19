import React from "react";

const FormTextArea = ({
  label,
  name,
  placeholder,
  rows,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  rows: number;
  required?: boolean;
  value: string;
  onChange: (event: any) => void;
}) => {
  return (
    <div className="md:col-span-2 sm:col-span-1 pt-5 pb-3">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          {label}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      ></textarea>
    </div>
  );
};

export default FormTextArea;
