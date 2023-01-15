//Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 

const arr = ["Vasya", "Petya", "Alexey"];

function removeUser(arr, numb) {
  arr.splice(numb, 1)
}

removeUser(arr, 1);
console.log(arr);

