// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

// ==================================== //

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// for (let i = 55; i >= 20; i--) {
//     console.log(i);
//   }
 
// ==================================== //

// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const numbers_squared = []
numbers_squared.push(numbers[0] ** 2, numbers[1] ** 2, numbers[2] ** 2, numbers[3] ** 2, numbers[4] ** 2, numbers[5] ** 2, numbers[6] **2)
console.log(numbers_squared)

// ==================================== //

// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

const last_elem = numbers_squared.pop([6])
console.log(last_elem);

// ==================================== //

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
first_name: 'Ivan', 
last_name: 'Ivanov', 
age: 20, 
salary: 500
}

console.log(`First name of user ${user.first_name}`);
console.log(`Last name of user ${user.last_name}`);
console.log(`Age of user ${user.age}`);
console.log(`The user's salary ${user.salary}`);

