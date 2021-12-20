import { cat } from './cat.js';
import { mouse } from './mouse.js'; 
import { arrow } from './arrowFunction.js';
import './main.scss';
import axios from 'axios';

axios
.get('/items')
.then((response) => {
  console.log(response);
  document.querySelector('.inside').innerText = response.data.items[0].name;

})
.catch((error) => {
  console.log(error);
})

const obj = {
  'a': 'apple',
  'b': 'buffalo'
}


const newObj = {...obj, 'c': 'cheetah'};
console.log('new obj', newObj);

const result = arrow();
console.log('result', result);
console.log(catNames.random());
console.log('cat', cat);
console.log('mouse', mouse);
console.log('content ahsh');