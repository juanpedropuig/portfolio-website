// Every time the user clicks in the main page the background and the letter's color change.
const cssColor = ['brown', 'beige', 'DimGray', 'MidnightBlue', 'Indigo', 'SlateGray', 'Teal', 
              'SpringGreen', 'Magenta', 'LemonChiffon', 'NavajoWhite', 'MediumSeaGreen', 'Olive', 
              'DarkCyan', 'Navy', 'HoneyDew', 'PowderBlue', 'MediumPurple', 'Sienna', 'LightSeaGreen'];

const body = document.getElementById('body');

// Selects random colors from the CSS color arrays to change.
const changeColor = () => {
  const newColor = cssColor[Math.floor(Math.random() * cssColor.length)];
  let newBGColor;

  // If background color is the same as color, it will keep looping until it's different.
  do {
    newBGColor = cssColor[Math.floor(Math.random() * cssColor.length)];
  } while (newColor === newBGColor);

  body.style.color = newColor;
  body.style.backgroundColor = newBGColor;    
}

const changeBack = () => {
  body.style.color = '';
  body.style.backgroundColor = '';
}

body.addEventListener('mousedown', changeColor);
// body.addEventListener('mouseup', changeBack);