export const onlyName = (v) => /^[A-Za-z ]{2,40}$/.test(v.trim());
export const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const strongPassword = (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/.test(v);
