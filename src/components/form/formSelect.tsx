const FormSelect = ({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name?: string;
  required?: boolean;
  options: Array<string>;
}) => {
  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-100 pt-5"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option
          disabled
          value=""
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Select an option
        </option>
        {options?.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
