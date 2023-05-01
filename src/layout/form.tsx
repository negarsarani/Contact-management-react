import { useState } from 'react';
import Input from '../components/input';

function Form({ setContactList, contactList }: any) {
  const [err, setErr] = useState({});
  const [formObj, setFormObj] = useState<any>({
    firstName: '',
    lastName: '',
    relation: '',
    phone: '',
    email: '',
  });

  const Validation = () => {
    const errObj={}

  };
  return (
    <div>
      <form action="" className="flex flex-col">
        <Input
          placeholder="نام..."
          value={formObj.firstName}
          setFormObj={setFormObj}
          type="text"
          name={'firstName'}
          Validation={Validation}
        />
        <Input
          placeholder="نام خانوادگی"
          value={formObj.lastName}
          setFormObj={setFormObj}
          type="text"
          name={'lastName'}
        />

        <Input
          placeholder="شماره تماس..."
          value={formObj.phone}
          setFormObj={setFormObj}
          type="text"
          name={'phone'}
        />
        <select
          value={formObj.relation}
          onChange={(e) =>
            setFormObj((prev) => {
              return { ...prev, relation: e.target.value };
            })
          }
          name=""
          id=""
          placeholder="نسبت"
          className="text-gray-400"
        >
          <option value="" disabled>
            نسبت
          </option>
          <option value="family1">اعضای خانواده</option>
          <option value="friend">دوست</option>
          <option value="coworker">همکار</option>
          <option value="family2">فامیل</option>
        </select>
        <Input
          placeholder="ایمیل"
          value={formObj.email}
          setFormObj={setFormObj}
          type="text"
          name={'email'}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          add
        </button>
      </form>
    </div>
  );
}

export default Form;
