const bankAccount = {
  ownerName: "Matviy",
  accountNumber: 123,
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів для зняття!");
    } else {
      this.balance -= amount;
    }
  },
};
alert(`Ваш рахунок: ${bankAccount.balance}`);

const confirmAction = confirm("Якщо бажаете поповнити натисніть 'ОК', якщо знати натисніть 'Cansel'");

if (confirmAction) {
  const depositAmount = Number(prompt("Введіть суму для поповнення:"));
  if (!isNaN(depositAmount) && depositAmount > 0) {
    bankAccount.deposit(depositAmount);
  } else {
    alert("Некоректна сума для поповнення.");
  }
} else {
  const withdrawAmount = Number(prompt("Введіть суму для зняття:"));
  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    bankAccount.withdraw(withdrawAmount);
  } else {
    alert("Некоректна сума для зняття.");
  }
}

alert(`Ваш рахунок: ${bankAccount.balance}`);


//Завдання 2

const weather = {
  temperature: 24,
  humidity: 10,
  windSpeed: 30,

  isTemperature() {
    return this.temperature < 0;
  },
};

weather.temperature = Number(prompt("Ведіть температуру"));

if (weather.isTemperature()) {
  alert("Температура нижче 0");
} else {
  alert("Температура вище 0");
}

//Завдання 3

const user = {
  name: "Aboltus",
  email: "aboltus@gmail.com",
  password: "aboltus",

  login() {
    const inputEmail = prompt("Введіть email");
    const inputPassword = prompt("Введіть пароль");

    const emailValid = inputEmail.includes("@");
    const passwordValid =
      inputPassword.length > 5 && inputPassword.length <= 20;

    if (emailValid && passwordValid) {
      alert("Вхід успішний");
      return true;
    } else {
      alert("Невірний email або пароль");
      return false;
    }
  },
};

user.login();

//Завдання 4

const movie = {
  title: "Spider-Man 2",
  director: "Matviy",
  year: 2011,
  rating: 10,
  ratingMovie() {
    return this.rating > 8;
  },
};

if (movie.ratingMovie()) {
  console.log("Рейтинг фільму вище 8");
} else {
  console.log("Рейтинг фільму нижче 8");
}
