const bankAccount = {
  ownerName: "Matviy",
  accountNumber: 123,
  balance: 0,

  deposit(dep) {
    bankAccount.balance += dep;
  },
  withdraw(withdrawMoney) {
    bankAccount.balance -= withdrawMoney;
  },
};
const confirmUser = confirm("Підтвердіть");
if (confirmUser) {
  bankAccount.deposit(prompt("Введіть суму для поповнення"));
} else {
  bankAccount.withdraw(prompt("Введіть скільки ви хочете зняти"));
}
alert(`Ваш рахунок ${bankAccount.balance}`);

//Завдання 2

const weather = {
  temperature: 24,
  humidity: 10,
  windSpeed: 30,

  isTemperature() {
    return weather.temperature < 0;
  },
};
weather.temperature = Number(prompt("Ведіть температуру"));
if (weather.isTemperature()) {
  alert("Температура нижще 0");
} else {
  alert("Температура вище 0");
}

//Завдання 3

const user = {
  name: "Aboltus",
  email: "aboltus@gmail.com",
  password: "aboltus",
  login() {
    const emailValid =
      user.email.includes("@")
    const passwordValid =
      user.password.length > 5 && user.password.length <= 20;
    if (!emailValid) {
      alert("");
    } else {
      alert("");
    }
    if (!passwordValid) {
      alert("");
    } else {
      alert("");
    }
    return emailValid && passwordValid;
  },
};

//Завдання 4

const movie = {
  title: "Spider-Man 2",
  director: "Matviy",
  year: 2011,
  rating: 10,
  ratingMovie() {
    return movie.rating > 8;
  },
};
if (movie.ratingMovie()) {
  console.log("Рейтинг фільму вище 8");
} else {
  console.log("Рейтинг фільму нижче 8");
}
