const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
const btn = document.getElementById('btn');

// returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  // get random number between 0-3 (0-3 because we're playing with the colors array)
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
