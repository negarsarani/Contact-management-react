import { useEffect, useState } from 'react';
import Input from '../components/input';
import { error, formType } from '../types/types';
import Button from '../components/Button';

function Form({ setContactList, contactList, edit, SetEdit }: any) {
  const [err, setErr] = useState<error>({
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
  const [activeObj, setActiveObj] = useState<any>({});
  useEffect(() => {
    if (edit.flag) {
      setActiveObj(() => {
        return {
          id: edit.item.id,
          firstName: edit.item.firstName,
          lastName: edit.item.lastName,
          relation: edit.item.relation,
          phone: edit.item.phone,
          email: edit.item.email,
        };
      });
    }
  }, [edit]);
  const Validation = (item: string) => {
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /09\d{9}$/;
    const object = edit.flag ? activeObj : formObj;
    switch (item) {
      case 'firstName':
        if (object.firstName.trim() === '') {
          err.firstName = 'نام ضروروی است!';
        } else {
          if (object.firstName.length < 3) {
            err.firstName = 'بیشتر 2 کلمه ضروری می باشد';
          } else {
            err.firstName = '';
          }
        }
        setErr((prev) => {
          prev = err;
          return { ...prev };
        });
        break;
      case 'lastName':
        if (object.lastName.trim() === '') {
          err.lastName = 'نام خانوادگی ضروری است!';
        } else {
          if (object.lastName.length < 3) {
            err.lastName = 'بیشتر از 2 کلمه ضروری می باشد';
          } else {
            err.lastName = '';
          }
        }
        setErr((prev) => {
          prev = err;
          return { ...prev };
        });
        break;

      case 'email':
        if (object.email.trim() === '') {
          err.email = 'ایمیل ضروری است!';
        } else if (!regexEmail.test(object.email)) {
          err.email = 'ایمیل معتبر نیست!';
        } else {
          err.email = '';
        }
        setErr((prev) => {
          prev = err;
          return { ...prev };
        });
        break;

      case 'phone':
        if (!regexPhone.test(object.phone)) {
          err.phone = 'شماره تلفن همراه باید با 09 شروع شود و شامل 11 عدد باشد';
        } else {
          err.phone = '';
        }
        setErr((prev) => {
          prev = err;
          return { ...prev };
        });

        break;
      case 'relation':
        if (object.relation.trim() === '' || object.relation === 'نسبت') {
          err.relation = 'لطفا یکی از گزینه ها را انتخاب کنید';
        } else {
          err.relation = '';
        }
        setErr((prev) => {
          prev = err;
          return { ...prev };
        });

        break;
      default:
        break;
    }

    handleError();
  };
  const handleError = () => {
    const errArray = Object.values(err).map((item) => item === '');
    const formArray = Object.values(formObj).map((item) => item !== '');
    const activeArray = Object.values(activeObj).map((item) => item !== '');
    if (edit.flag) {
      setIsvalid((prev) => {
        if (
          errArray.every((item) => item === true) &&
          activeArray.every((item) => item === true)
        ) {
          return (prev = true);
        } else {
          return (prev = false);
        }
      });
    }else{
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
    }
   
  };

  const handleEdit = () => {
    const editarr = contactList.map((item: formType) => {
      if (item.id === activeObj.id) {
        item = activeObj;
      }
      return item;
    });

    setContactList(() => editarr);
    SetEdit((prev: any) => {
      prev.flag = false;
      prev.item = {};
      return { ...prev };
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
            value={edit.flag ? activeObj.firstName : formObj.firstName}
            setFormObj={setFormObj}
            edit={edit}
            setActiveObj={setActiveObj}
            type="text"
            name={'firstName'}
            Validation={Validation}
          />
          <span className="text-red-500">{err.firstName} </span>
        </div>
        <div className="flex flex-col w-full">
          <Input
            placeholder="نام خانوادگی..."
            value={edit.flag ? activeObj.lastName : formObj.lastName}
            setFormObj={setFormObj}
            type="text"
            name={'lastName'}
            Validation={Validation}
            edit={edit}
            setActiveObj={setActiveObj}
          />
          <span className="text-red-500">{err.lastName}</span>
        </div>
        <div className="flex flex-col w-full">
          <Input
            placeholder="شماره تماس..."
            value={edit.flag ? activeObj.phone : formObj.phone}
            setFormObj={setFormObj}
            type="text"
            name={'phone'}
            Validation={Validation}
            edit={edit}
            setActiveObj={setActiveObj}
          />
          <span className="text-red-500">{err.phone}</span>
        </div>
        <div className="flex flex-col w-full">
          <select
            value={edit.flag ? activeObj.relation : formObj.relation}
            onChange={(e) => {
              if (edit.flag) {
                setActiveObj((prev) => {
                  prev.relation = e.target.value;
                  return { ...prev };
                });
              } else {
                setFormObj((prev: formType) => {
                  return { ...prev, relation: e.target.value };
                });
              }
            }}
            onClick={Validation}
            name=""
            id=""
            placeholder="نسبت"
            className="text-gray-400 w-full border border-black py-[.5rem] rounded-md px-1 "
          >
            <option value="" disabled>
              نسبت
            </option>
            <option value="خانواده">اعضای خانواده</option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
            <option value="فامیل">فامیل</option>
          </select>
          <span className="text-red-500">{err.relation}</span>
        </div>

        <div className="flex flex-col w-full">
          <Input
            placeholder="ایمیل"
            value={edit.flag ? activeObj.email : formObj.email}
            setFormObj={setFormObj}
            type="text"
            name={'email'}
            Validation={Validation}
            edit={edit}
            setActiveObj={setActiveObj}
          />
        <span className="text-red-500">{err.email}</span>
        </div>
        <Button
          style={`${
            isvalid ? ` bg-violet-500 text-white` : `bg-gray-400 text-black`
          }  rounded-md p-2 w-40`}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (isvalid) {
              if (edit.flag === true) {
                handleEdit();
              } else {
                setContactList(() => {
                  return [...contactList, { ...formObj }];
                });
              }
            }

            if (edit.flag) {
              handleEdit();
            } else {
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
                setIsvalid(false);
              } else {
                alert('همه ی فیلد ها را پر کیند');
              }
            }
            setIsvalid(false)
          }}
        >
          {edit.flag ? 'ثبت ویرایش' : 'ثبت مخاطب جدید'}
        </Button>
      </form>
    </div>
  );
}

export default Form;
