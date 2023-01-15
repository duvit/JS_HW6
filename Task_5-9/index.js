//5. Создайте класс Condidate который будет принимать параметром объект из массива condidateArr.
//Добавить метод с именем state который вернет шатат в котором живает наш кaндидат.
//Информация о штате находится в свойстве address и это третья запись после запятой.

class Сandidate {
  constructor(candidate) {
    Object.assign(this, candidate);
  }

  state() {
    const state = this.address.split(", ").slice(2, 3);
    return state.join();
  }
}

const candidate = new Сandidate(candidateArr[0]);
// console.log(candidate.state());

//6. Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company.
//Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr

function getCompanyNames() {
  const candidatesArr = [...candidateArr];
  const companiesArr = [];

  candidatesArr.forEach((obj) => {
    companiesArr.push(obj.company);
  });

  const uniqueCompanies = companiesArr.filter(
    (item, index) => companiesArr.indexOf(item) === index
  );

  return uniqueCompanies;
}

// console.log(getCompanyNames());

//7. Создать функцию которая выведет мне массив id всех кaндидатов, которые
//были зарагестрированны в том же году что и год указанный в параметре.

function getUsersByYear(year) {
  const candidatesArr = [...candidateArr];

  const idArr = candidatesArr.filter(
    (obj) => obj.registered.split("-")[0] == year
  );

  return idArr;
}

// console.log(getUsersByYear(2017));

//8. Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных
//по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке,
//Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
//Все так же используем массив candidateArr

function getCondidatesByUnreadMsg(amount) {
  const candidatesArr = [...candidateArr];

  const candidatesWithUnreadMsg = candidatesArr.filter(
    (el) => el.greeting.match(/\d+/)[0] == amount
  );

  return candidatesWithUnreadMsg;
}

console.log(getCondidatesByUnreadMsg(8));

//9.Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr

function getCondidatesByGender(gender) {
  const candidatesArr = [...candidateArr];

  const wantedGender = candidatesArr.filter((obj) => obj.gender === gender);

  return wantedGender;
}

// console.log(getCondidatesByGender("male"));
