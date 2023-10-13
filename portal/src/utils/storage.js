export const getStorage = (key) => {
  const value = window.localStorage.getItem(key)
  if (value === 'no token') {
    return
  }
  return JSON.parse(value);
}

export const setStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}