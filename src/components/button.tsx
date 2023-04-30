import { Button } from "../types/types";

  
  const Button = ({ children, onClick, style }: Button) => {
    return (
      <button
        className={`border border-black rounded-md w-48 h-10 text-center flex items-center justify-center p-5 ${style}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;