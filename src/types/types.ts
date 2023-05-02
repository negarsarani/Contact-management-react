export type Button = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
};

export interface input {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  setFormObj: any;
  Validation?:any
}
export interface formType {
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
