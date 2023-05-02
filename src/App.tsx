// import { useState } from 'react';
import { useState } from 'react';
import './index.css';
import Contactlist from './layout/contactlist';
import Form from './layout/form';

function App() {
  const [contactList, setContactList] = useState<any>([]);

  return (
    <div className="bg-red-200 flex flex-col  items-center justify-center py-10 gap-10 flex-row-reverse	">
      <Form setContactList={setContactList} contactList={contactList} />
      <Contactlist />
    </div>
  );
}

export default App;
