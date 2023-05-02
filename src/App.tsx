// import { useState } from 'react';
import { useState } from 'react';
import './index.css';
import Contactlist from './layout/contactlist';
import Form from './layout/form';

function App() {
  const [contactList, setContactList] = useState<any>([]);

  return (
    <div className="bg-red-200">
      <Form setContactList={setContactList} contactList={contactList} />
      <Contactlist />
    </div>
  );
}

export default App;
