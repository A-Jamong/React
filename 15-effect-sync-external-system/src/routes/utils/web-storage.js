/**@type {(key: string) => any} */

export function getStorageData(key, initialValue = null) {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return initialValue;
  }
}
/**@type {(key: string, value: any) => void} */
export function setStroageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
