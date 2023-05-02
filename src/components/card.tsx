import Button from './button';

function Card() {
  return (
    <div className="flex flex-col relative  bg-violet-400 rounded-md py-2 ">
      <div className="flex flex-col items-start gap-1 pt-6 py-3 px-3 text-white">
        <span>علیرضا قرقای</span>
        <span>091288888888</span>
        <span>دوست</span>
        <span>علیرضا قرقابی</span>
        <span>ali@ gmail.com</span>
      </div>
      <div className="flex items-center justify-center absolute top-2 left-2">
       
         <Button onClick={()=>{""}} style='' > <img className='w-6' src="./public/edit.svg" alt="" /></Button>
        <Button onClick={()=>{""}} style='' > <img className='w-6' src="./public/trash.svg" alt="" /></Button> 
      </div>
    </div>
  );
}

export default Card;
