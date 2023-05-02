import React from 'react';
import Button from './Button';

const Modal = ({ closeModal, handleDelete }: any) => {
  return (
    <div className="shadow-md modal bg-slate-200 p-5 flex flex-col gap-10 text-center rounded-md text-black">
      <h2>آیا از حذف این مخاطب اطمینان دارید؟</h2>

      <div className="flex items-center justify-center gap-5">
        <Button
          onClick={() => closeModal()}
          style="w-20 p-1 bg-gray-400 text-white  rounded-md"
        >
          خیر
        </Button>
        <Button
          onClick={() => handleDelete()}
          style="w-20 p-1 bg-red-800 text-white  rounded-md"
        >
          بله
        </Button>
      </div>
    </div>
  );
};

export default Modal;
