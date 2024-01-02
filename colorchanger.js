// in this we have to change the color of background according to the box

// button class ko select kr lege
// button class me for each loop lagayege
// click event se check krege konsa button click hua hai

const body = document.querySelector('body');
const buttonele = document.querySelectorAll('.button'); // sari button class ab buttonele me stored hai we can apply for each loop on button ele

buttonele.forEach(function (button) {
  // buttonele me stored each elements ie grey white blue yellow call back function me pass honge unke id pata laga lege ie click kr rahe ho to konsi id vale button pe click ho raha hai
  button.addEventListener('click', function (b) {
    if (b.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (b.target.id === 'white') {
      body.style.backgroundColor = b.target.id;
    }
    if (b.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (b.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});