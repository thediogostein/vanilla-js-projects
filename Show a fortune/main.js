const btn = document.querySelector('button');
const fortune = document.querySelector('#fortune');

const getFortune = () => {
  fortune.textContent = "You're going to have a wonderful day!";
};

btn.addEventListener('click', getFortune);
