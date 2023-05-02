import { useState } from 'react';
import Input from '../components/input';
import { formType } from '../types/types';
import Button from '../components/button';

function Form({ setContactList, contactList }: any) {
  const [err, setErr] = useState<formType>({
    firstName: '',
    lastName: '',
    relation: '',
    phone: '',
    email: '',
  });
  const [isvalid, setIsvalid] = useState<boolean>(false);
  const [formObj, setFormObj] = useState<formType>({
    id: Date.now(),
    firstName: '',
    lastName: '',
    relation: '',
    phone: '',
    email: '',
  });
  const Validation = (item) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /09\d{8}$/;
    const errObj = {
      firstName: '',
      lastName: '',
      relation: '',
      phone: '',
      email: '',
    };
    switch (item) {
      case 'firstName':
        if (formObj.firstName === '') {
          errObj.firstName = 'name is reqiuerd';
        } else {
          formObj.firstName.length < 3
            ? (errObj.firstName = 'too Short...')
            : '';
        }
        break;
      case 'lastName':
        if (formObj.lastName === '') {
          errObj.lastName = 'name is reqiuerd';
        } else {
          formObj.lastName.length < 3 ? (errObj.lastName = 'too Short...') : '';
        }
        break;

      case 'email':
        formObj.email === ''
          ? (errObj.email = 'Email required!')
          : !regexEmail.test(formObj.email)
          ? (errObj.email = 'Email not valid!')
          : '';
        break;

      case 'phone':
        !regexPhone.test(formObj.phone)
          ? (errObj.phone =
              'phone number should start with 09 and must 11 char')
          : '';
        break;
      case 'relation':
        formObj.relation === '' ? (errObj.relation = 'entekhab kon') : '';

        break;
      default:
        break;
    }
    setErr({ ...errObj });
    handleError();
  };
  const handleError = () => {
    const errArray = Object.values(err).map((item) => item === '');
    const formArray = Object.values(formObj).map((item) => item !== '');
    setIsvalid((prev) => {
      if (
        errArray.every((item) => item === true) &&
        formArray.every((item) => item === true)
      ) {
        return (prev = true);
      } else {
        return (prev = false);
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-4 items-center justify-center w-9/12 md:w-6/12 xl:w-4/12"
      >
        <div className="flex flex-col w-full">
          <Input
            placeholder="نام..."
            value={formObj.firstName}
            setFormObj={setFormObj}
            type="text"
            name={'firstName'}
            Validation={Validation}
          />
          <span className="text-black">{err.firstName} </span>
        </div>
        <div className="flex flex-col w-full">
          <Input
            placeholder="نام خانوادگی..."
            value={formObj.lastName}
            setFormObj={setFormObj}
            type="text"
            name={'lastName'}
            Validation={Validation}
          />
          <span className="text-black">{err.lastName}</span>
        </div>
        <div className="flex flex-col w-full">
          <Input
            placeholder="شماره تماس..."
            value={formObj.phone}
            setFormObj={setFormObj}
            type="text"
            name={'phone'}
            Validation={Validation}
          />
          <span className="text-black">{err.phone}</span>
        </div>
        <div className="flex flex-col w-full">
          <select
            value={formObj.relation}
            onChange={(e) =>
              setFormObj((prev) => {
                return { ...prev, relation: e.target.value };
              })
            }
            onClick={Validation}
            name=""
            id=""
            placeholder="نسبت"
            className="text-gray-400 w-full border border-black py-[.5rem] rounded-sm px-1 "
          >
            <option value="" disabled>
              نسبت
            </option>
            <option value="خانواده">اعضای خانواده</option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
            <option value="فامیل">فامیل</option>
          </select>
          <span className="text-black">{err.relation}</span>
        </div>

        <div className="flex flex-col w-full">
          <Input
            placeholder="ایمیل"
            value={formObj.email}
            setFormObj={setFormObj}
            type="text"
            name={'email'}
            Validation={Validation}
          />
        </div>
        <span className="text-black">{err.email}</span>
        <Button
          style={`${
            isvalid ? ` bg-violet-500 text-white` : `bg-gray-400 text-black`
          }  rounded-md p-2 w-40`}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (isvalid) {
              setContactList(() => {
                return [...contactList, { ...formObj }];
              });
              setFormObj({
                id: Date.now(),
                firstName: '',
                lastName: '',
                relation: '',
                phone: '',
                email: '',
              });
            }
          }}
        >
          Add to my contact
        </Button>
      </form>
    </div>
  );
}

export default Form;
