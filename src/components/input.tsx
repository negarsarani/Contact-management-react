import { formType, input } from '../types/types';

const Input = ({
  placeholder,
  type,
  value,
  setFormObj,
  name,
  Validation,
  style
}: input) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) =>
        setFormObj((prev : formType) => {
          prev[name] = e.target.value;
          return { ...prev };
        })
      }
      onBlur={()=>Validation(name)}
      onKeyUp={()=>Validation(name)}
      name={name}
      className={`border text-black border-black ${style} px-1 py-[.2rem] h-10  rounded-sm w-full`}
    ></input>
  );
};

export default Input;
