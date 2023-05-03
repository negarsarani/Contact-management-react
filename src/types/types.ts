export type Buttontype = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  type?: string;
};

export interface input {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  setFormObj: any;
  Validation?: any;
  style?: string;
  edit?:any
  setActiveObj?:any
}
export interface formType {
  id?: number;
  firstName: string;
  lastName: string;
  relation: string;
  phone: number | string;
  email: string;
}
export interface error {
  id?: number;
  firstName: string;
  lastName: string;
  relation: string;
  phone: number | string;
  email: string;
}


// export interface ContactListState {
//   contactList: formType[];
//   setContactList: React.Dispatch<React.SetStateAction<formType[]>>;
// }
export type contactlist = {
  contactList: any;
  setContactList: React.Dispatch<React.SetStateAction<[]>>;
  SetEdit: React.Dispatch<React.SetStateAction<formType>> | any;
};
