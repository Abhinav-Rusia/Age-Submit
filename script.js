const myText = document.getElementById("myText");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");
let age;

submit.onclick = function () {
  age = myText.value;
  age = Number(age)
  if (age >= 100) {
    resultElement.textContent = `You are TOO old to enter this site.`;
  } else if (age === 0) {
    resultElement.textContent = `You cant Enter, at age ${age} how are you using INTERNET.`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site.`;
  } else if (age < 0) {
    resultElement.textContent = `Your Age cannot be below Zero.`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
};
