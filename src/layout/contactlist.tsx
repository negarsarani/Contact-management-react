import Modal from '../components/Modal';
import Card from '../components/card';
import { contactlist, formType } from '../types/types';
import { useState } from 'react';

function Contactlist({ contactList, setContactList, SetEdit }: contactlist) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const handleDelete = () => {
    setContactList(
      contactList.filter((item: formType) => {
        return item.id !== activeId;
      })
    );
    setActiveId(0);
    closeModal();
  };
  function openModal(id: number) {
    setActiveId(id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setActiveId(0);
  }
  function findEditObj(id: number) {
    const [findItem] = contactList.filter((item: formType) => {
      return item.id === id;
    });
    // setContactList(findItem);

    SetEdit({ flag: true, item: findItem });
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5   items-center justify-center w-8/12 md:w-10/12">
        {contactList.map((item: formType) => (
          <Card
            item={item}
            key={item.id}
            openModal={openModal}
            findEditObj={findEditObj}
          />
        ))}
      </div>
      <div>
        {isOpen && (
          <Modal closeModal={closeModal} handleDelete={handleDelete} />
        )}
      </div>
    </>
  );
}

export default Contactlist;
