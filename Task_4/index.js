//Содать функцию,где мы первым параметром передадим объект с новым кандидатом,
// а вторым параметром - id любого кондидата в массиве condidateArr.
//Функция должна будет вставить кандидата переданного через первый параметр
//в массив перед кондидатом у которого id равно тому что передали во-втором параметре

const obj = {
  id: 3,
  name: "Vasya",
};

const secondObj = {
  id: 4,
  name: "Katya",
};

const arr = [
  {
    id: 1,
    name: "Kolya",
  },
  {
    id: 2,
    name: "Petya",
  },
];


function insertIntoarr(obj, id) {
  arr.splice(id-1, 0, obj);
}

insertIntoarr(obj, 2);
console.log(arr);

insertIntoarr(secondObj, 1);
// console.log(arr);
