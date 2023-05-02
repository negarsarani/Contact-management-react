// import { useState } from 'react';
import { useState } from 'react';
import './index.css';
import Contactlist from './layout/contactlist';
import Form from './layout/form';

function App() {
  const [contactList, setContactList] = useState<[]>([]);

  return (
    <div className="flex flex-col  items-center justify-center py-10 gap-10 flex-row-reverse relative	">
      <Form setContactList={setContactList} contactList={contactList} />
      <Contactlist contactList={contactList} setContactList={setContactList}/>
    </div>
  );
}

export default App;
