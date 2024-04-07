interface Input_Props {
  border?: string;
  className: string;
  value?: string;
  maxLength: number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const Input = ({
  border,
  className,
  value,
  maxLength,
  placeholder,
  onChange,
  onBlur,
}: Input_Props) => {
  return (
    <input
      style={{ border: border }}
      type="text"
      className={className}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
