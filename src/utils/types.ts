export interface AuthText {
  message: string;
  action: string;
  to: string;
}

export interface AuthTexts {
  [key: string]: AuthText;
}
