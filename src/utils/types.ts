export interface AuthText {
  message: string;
  action: string;
  to: string;
}

export interface AuthTexts {
  [key: string]: AuthText;
}

export interface InputField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

export interface AuthDataType {
  name?: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export interface UserDataType {
  name: string;
  email: string;
}

export interface ItemType {
  [key: string]: string | number;
  id: string;
  productName: string;
  price: number;
  quantity: number;
  total: number;
}

export interface ItemsState {
  itemsList: ItemType[];
  tax: number;
}

export interface AuthState {
  refetchStatus: boolean;
  token: string | null;
}

export interface LoginReturnType {
  message: string;
  name: string;
  token: string;
}
