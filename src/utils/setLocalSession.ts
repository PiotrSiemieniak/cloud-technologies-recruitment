export function setLocalSession(token: string) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  document.cookie = `authToken=${token}; expires=${expiryDate.toUTCString()}; path=/`;
}