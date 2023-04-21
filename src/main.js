import Swal from 'sweetalert2';
import { renderAllCur } from './components';
import { fetchRates } from './sevices/api';
import './style.css';

const curInput = document.querySelector('.search-cur input');
const btnSearch = document.querySelector('.search-cur button');

const getRates = (event) => {
  event.preventDefault();
  const curName = curInput.value;
  fetchRates(curName)
    .then(({ base, rates }) => {
      const allCurValues = Object.entries(rates).map((rate) => ({
        curName: rate[0],
        value: rate[1],
      }));

      renderAllCur(allCurValues, base);
    })
    .catch(() => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This currency is not valid!',
    }));
};

btnSearch.addEventListener('click', getRates);
