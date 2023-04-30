export type Button = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
};

export interface input {
  placeholder: string;
  type: string;
  value: string;
  onChange: (x: string) => void;
}
export interface formType {
  name: string;
  surName: string;
  relation: string;
  phone: number;
  email: string;
}
// export interface ContactListState {
//   contactList: formType[];
//   setContactList: React.Dispatch<React.SetStateAction<formType[]>>;
// }
