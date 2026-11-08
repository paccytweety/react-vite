export const getLastObjectKey = (value) => value.slice(value.lastIndexOf('.') + 1);

// Divisione per tentativi, volutamente lenta: serve a mostrare il costo di un calcolo
export const countPrimes = (limit) => {
  let count = 0;
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }
  return count;
};

export const flattenObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};

export const splitQueryParams = (queryString) => {
  const splittedQuery = {}
  const paramsToBeSplitted = new URLSearchParams(queryString);
  for (const param of paramsToBeSplitted.entries()) {
    const [key, value] = param;
    splittedQuery[key] = value;
  }
  return splittedQuery;
}