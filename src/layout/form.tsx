import { useState } from 'react';
import Input from '../components/input';

function Form({setContactList , contactList}:any) {
  return (
    <div>
      <Input placeholder="نام..." value="" onChange={() => {}} type="text" />
    </div>
  );
}

export default Form;
