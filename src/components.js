const curContainer = document.querySelector('#all-values');
const resultTitle = document.querySelector('#all-values h2');
const eachCur = document.querySelector('#all-values ul');

export function createCurElem(cur, value) {
  const newElem = document.createElement('li');
  newElem.innerHTML = `<img src="./src/assets/coin.png"> ${cur} <span>${value}</span>`;
  return newElem;
}

export function renderAllCur(arrayCur, curName) {
  curContainer.className = 'all-values';
  resultTitle.innerHTML = `Values equivalent to 1 ${curName}`;
  eachCur.innerHTML = '';

  arrayCur.forEach((currency) => {
    const curinfo = createCurElem(currency.curName, currency.value.toFixed(2));
    eachCur.appendChild(curinfo);
  });
}
