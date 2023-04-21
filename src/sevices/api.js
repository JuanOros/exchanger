const BASE_URL_CUR = 'https://api.exchangerate.host/latest?base=';

export function fetchRates(curInput) {
  return fetch(`${BASE_URL_CUR}${curInput}`)
    .then((request) => request.json())
    .then((data) => {
      if (data.base !== curInput.toUpperCase()) {
        throw new Error('This currency input does not exist');
      }
      return data;
    });
}
