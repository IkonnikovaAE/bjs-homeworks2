

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
    let D = Math.pow(b,2)-4*a*c;
    let x = [];
    switch (true) {
    	case (D < 0):
    	  console.log("Корней нет");
    	  break;
    	case (D == 0):
    	  x[0] = (-1*b)/(2*a);
    	  console.log(x);
    	  break;
    	case (D > 0):
    	  x = [((-b)+Math.pow(D,0.5))/(2*a), ((-b)-Math.pow(D,0.5))/(2*a)];
    	  console.log(x);
    	  break;
    }
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (age > 18) {
    	message = `Не желаете ли олд-фэшн, ${name} ?`;
    } else {
    	message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(message);
    return message;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    if (marks.length > 5) {
    	console.log("Количество оценок больше 5");
    	marks = marks.slice(0, 5);
    }
    let averageMark = 0;
    for (let i=0; i < marks.length; i++) {
    	averageMark = averageMark + marks[i];
    }
    averageMark = (averageMark/marks.length);
    return averageMark;
}