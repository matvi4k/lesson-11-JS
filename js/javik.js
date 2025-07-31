const bankAccount = {
  ownerName: "Matviy",
  accountNumber: 123,
  balance: 0,

  deposit(dep) {
    this.balance += dep;
  },
  withdraw(withdrawMoney) {
    this.balance -= withdrawMoney;
  },
};
const confirmUser = confirm("Підтвердіть");
if (confirmUser) {
  this.deposit(prompt("Введіть суму для поповнення"));
} else {
  this.withdraw(prompt("Введіть скільки ви хочете зняти"));
}
alert(`Ваш рахунок ${this.balance}`);

//Завдання 2

const weather = {
  temperature: 24,
  humidity: 10,
  windSpeed: 30,

  isTemperature() {
    return this.temperature < 0;
  },
};
this.temperature = Number(prompt("Ведіть температуру"));
if (this.isTemperature()) {
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
      this.email.includes("@")
    const passwordValid =
      this.password.length > 5 && this.password.length <= 20;
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
    return this.rating > 8;
  },
};
if (this.ratingMovie()) {
  console.log("Рейтинг фільму вище 8");
} else {
  console.log("Рейтинг фільму нижче 8");
}
