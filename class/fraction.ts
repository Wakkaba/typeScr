import { deputat } from "./deputat";

export class fraction {
  deputatList: deputat[] = [];

  constructor(deputatList: []) {
    this.deputatList = deputatList;
  }

  addDeputat(newDeputat: deputat) {
    this.deputatList.push(newDeputat);
  }

  deleteDeputat(deputatExtermination: deputat) {
    this.deputatList.forEach((deputat, index) => {
      if (deputat === deputatExtermination) this.deputatList.splice(index, 1);
    });
  }

  deleteNegidnik() {
    const holyDeputat = this.deputatList.filter(deputat => {
      return !deputat.habar;
    });
    this.deputatList.splice(0, this.deputatList.length);
    this.deputatList = [...holyDeputat];
  }

  findBiggestHabarnik() {
    const [biggestHabarnik] = this.deputatList.sort(
      (deputat1: deputat, deputat2: deputat) => {
        return deputat2.habarSize - deputat1.habarSize;
      }
    );

    console.log(biggestHabarnik);
  }

  showAlldeputat() {
    console.log(this.deputatList);
  }

  deleteAllDeputat() {
    console.log(this.deputatList.splice(0, this.deputatList.length));
  }
  showAllHabars() {
    this.deputatList.reduce((deputat1: number, deputat2: deputat) => {
      return deputat1 + deputat2.habarSize;
    }, 0);
  }
}
