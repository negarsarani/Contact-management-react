import { input } from '../types/types';

const Input = ({ placeholder, type, value, onChange }: input) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={() => {
        onChange;
      }}
      className='border border-black '
    ></input>
  );
};

export default Input;
