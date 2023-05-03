import { formType } from '../types/types';
import Button from './Button';

function Card({item, openModal , findEditObj}:any) {
  
  return (
    <div className="flex flex-col relative  bg-violet-400 rounded-md py-2 ">
      <div className="flex flex-col items-start gap-1 pt-6 py-3 px-3 text-white">
        <span>{item.firstName}</span>
        <span>{item.lastName}</span>
        <span>{item.relation}</span>
        <span>{item.phone}</span>
        <span>{item.email}</span>
      </div>
      <div className="flex items-center justify-center absolute top-2 left-2">
       
         <Button onClick={()=>{findEditObj(item.id)}} style='' > <img className='w-6' src="./public/edit.svg" alt="" /></Button>
        <Button onClick={()=>openModal(item.id)} style='' > <img className='w-6' src="./public/trash.svg" alt="" /></Button> 
      </div>
    </div>
  );
}

export default Card;
