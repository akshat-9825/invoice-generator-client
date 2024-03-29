export const generateId = () => {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2, 8);
  return `${timestamp}${random}`;
};

export const BASE_URL = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_REACT_APP_BASE_API_URL;
  } else {
    return import.meta.env.VITE_PRODUCTION_BASE_API_URL;
  }
};
