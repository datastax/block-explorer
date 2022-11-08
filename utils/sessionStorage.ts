const writeToSessionStorage = (key: string, value: string) => {
  typeof window !== 'undefined' && sessionStorage.setItem(key, value)
}

const readFromSessionStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return null
}

const deleteFromSessionStorage = (key: string) => {
  typeof window !== 'undefined' && sessionStorage.removeItem(key)
}

export {
  writeToSessionStorage,
  readFromSessionStorage,
  deleteFromSessionStorage,
}
