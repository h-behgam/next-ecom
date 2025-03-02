interface InputProps {
  type: string;
  name: string | number;
  defaultValue?: string | number;
  autoComplete?: string;
  placeholder?: string;
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labalName?: string;
  labelClassName?: string;
  labelTitle?: string;
  multiple?: boolean;
  value?: string;
}

export default function CustomInput({
  type,
  name,
  defaultValue,
  changeHandler,
  className,
  autoComplete,
  labalName,
  labelClassName,
  labelTitle,
  placeholder,
  multiple,
  value,
}: InputProps) {
  const defaultclassName =
    'block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
  const defaultLabelClassName = 'block mb-1';
  return (
    <>
      {labalName && (
        <label
          htmlFor={labalName}
          className={labelClassName ? labelClassName : defaultLabelClassName}
        >
          {labelTitle}
        </label>
      )}
      <input
        multiple={multiple}
        type={type}
        name={name as string}
        id={name as string}
        placeholder={placeholder}
        onChange={changeHandler}
        autoComplete={autoComplete}
        className={className ? className : defaultclassName}
        {...(defaultValue ? { defaultValue: defaultValue } : {})}
        {...(value ? { value: value } : {})}
      />
    </>
  );
}
