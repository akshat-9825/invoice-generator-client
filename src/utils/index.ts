export const generateId = () => {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2, 8);
  return `${timestamp}${random}`;
};
