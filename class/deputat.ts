import { human } from "./human";

export class deputat extends human {
  // прізвище,ім'я,вік,хабарник?,розмі хабаря
  surname: string;
  name: string;
  age: number;
  habar: boolean;
  habarSize: number;

  constructor(
    height: number,
    weight: number,
    surname: string,
    name: string,
    age: number,
    habar: boolean,
    habarSize: number
  ) {
    super(weight, height);
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.habar = habar;
    this.habarSize = habarSize;
  }

  giveHabar(money: number) {
    if (!this.habar) {
      console.log("I`m gonna call the police!");
    }
    if (money > this.habarSize) {
      console.log("m-m-m i love money");
    }
  }
}
