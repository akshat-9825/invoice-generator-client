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
  email: string;
  password: string;
  confirm_password?: string;
}
