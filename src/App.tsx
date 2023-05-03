// import { useState } from 'react';
import { useState } from 'react';
import './index.css';
import Contactlist from './layout/contactlist';
import Form from './layout/form';
import { formType } from './types/types';

function App() {
  const [contactList, setContactList] = useState<[]>([]);
  const [edit, SetEdit] = useState<{ flag: boolean; item: formType }>({
    flag: false,
    item:{}
  });
  return (
    <div className="flex flex-col  items-center justify-center py-10 gap-10 flex-row-reverse relative	">
      <Form
        setContactList={setContactList}
        contactList={contactList}
        SetEdit={SetEdit}
        edit={edit}
      />
      <Contactlist
        contactList={contactList}
        setContactList={setContactList}
        SetEdit={SetEdit}
      />
    </div>
  );
}

export default App;
