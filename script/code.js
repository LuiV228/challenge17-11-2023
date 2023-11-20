// Question 1

document.getElementById(`heading`).innerText = `JavaScript`

// Question 2

document.querySelector(`.paragraph`).textContent = `This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself`

// Question 3

document.querySelector(`h3`).textContent = `Things I've accomplished so far`

// Question 4

document.getElementsByTagName(`p`)[1].textContent = `I have discovered that I can accomplish anything I put my mind to`

// Question 5

let calculateOne = document.querySelector(`[data-calculate1]`)
let first = document.querySelector(`[data-first]`)
first.innerText = multiply()

function multiply() {
    let firstMultiply = document.querySelector(`[data-firstMultiply]`).value
    let secondMultiply = document.querySelector(`[data-secondMultiply]`).value
    first.innerText = firstMultiply * secondMultiply
}   
calculateOne.addEventListener('click', multiply);

// Question 6

let calculateTwo = document.getElementById(`calculate2`)
let second = document.querySelector(`[data-second]`)
second.innerText = modulus()

function modulus() {
    let firstModulus = document.querySelector(`[data-firstModulus]`).value
    let secondModulus = document.querySelector(`[data-secondModulus]`).value
    second.innerText = firstModulus % secondModulus
}

calculateTwo.addEventListener('click', modulus);

// Question 7

document.getElementById(`bubbleTea`).textContent = `White Tea`
document.querySelector(`.greenTea`).textContent = `Black Tea`
document.getElementsByTagName(`li`)[3].textContent = `Herbal Tea`

// Question 8

let lastName = `Toffey`

// Question 9

let parentsAge = 20

// Question 10

let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

// Question 11

coolCars.splice(3, 1, `Lamborghini`)

// Question 12

for (let i = 0; i < coolCars.length; i++) {
    console.log(`-> ${coolCars[i]}`);;
}

// Question 13

console.log(coolCars.reverse());

// Question 14

let coolKars = coolCars.shift(-1)
console.log(coolCars.reverse());
console.log(coolKars);

// Question 15

console.log(coolCars.unshift(coolKars));
console.log(coolCars);

// Question 16

let age = 18
let a = 17

if (age <= 17) {
    console.log(`Age: ${age} (17 and younger)`); 
} 
else {
    console.log(`Age: ${age} (18 and older)`); 
}

// Question 17

switch (true) {
    case age <= 17:
        console.log(`Age: ${age} (17 and younger)`);
        break;

    case age > 17:
        console.log(`Age: ${age} (18 and older)`);
        break;
}