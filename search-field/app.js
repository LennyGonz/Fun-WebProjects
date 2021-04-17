'use strict';

const typeaheadInput = document.querySelector('#typeahead');
const typeaheadResults = document.querySelector('#typeahead-results');
const typeaheadClear = document.querySelector('#clear');
const sampleTypeaheadData = [
  '#BlackLivesMatter',
  '#LoveIsLove',
  'caturday',
  'puppies',
  'koala',
  'otter',
  'rabbits',
  'cute cat',
  'cute dog'
];

function Typeahead() {
  ['input', 'keyup', 'paste', 'click'].forEach(function (event) {
    typeaheadInput.addEventListener(event, function () {
      const value = typeaheadInput.value;
      typeaheadResults.innerHTML = '';

      if (value.length) {
        typeaheadResults.classList.remove('hidden');
      } else {
        typeaheadResults.classList.add('hidden');
      }

      for (let i = 0; i < sampleTypeaheadData.length; i += 1){
        if (value.length && sampleTypeaheadData[i].indexOf(value) !== -1) {
          const newDiv = document.createElement('div');
          // add css onhover highlight results
          newDiv.classList.add('typeahead-item');
          newDiv.innerHTML = sampleTypeaheadData[i];
          // objective 1 - onClick the value of typeaheadInput is the sampleTypeaheadData[i](e.g. cute dog)
          newDiv.addEventListener('click', function () {
            typeaheadInput.value = sampleTypeaheadData[i];
            typeaheadResults.classList.add('hidden')
          })
          typeaheadResults.appendChild(newDiv);
        }
      }
    })
    // objective 3 - clear the input field
    typeaheadClear.addEventListener('click', function () {
      typeaheadInput.value = ''
    })
  })
}

document.addEventListener('DOMContentLoaded', new Typeahead());
