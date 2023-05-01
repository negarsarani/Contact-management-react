import { input } from '../types/types';

const Input = ({
  placeholder,
  type,
  value,
  setFormObj,
  name,
  Validation,
}: input) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) =>
        setFormObj((prev) => {
          prev[name] = e.target.value;
          return { ...prev };
        })
      }
      onBlur={Validation}
      onKeyDown={Validation}
      name={name}
      className="border text-black border-black "
    ></input>
  );
};

export default Input;
