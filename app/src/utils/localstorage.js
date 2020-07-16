export const getFromLocalStorage = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) || defaultValue;

export const updateInLocalStorage = (key, value) => localStorage.setItem(key, value);