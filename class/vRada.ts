import { fraction } from "./fraction";
import { deputat } from "./deputat";

export class vRada {
  fractionList: fraction[] = [];

  constructor(fractionlist: fraction[] = []) {
    this.fractionList = fractionlist;
  }
  addFraction(newFraction: fraction) {
    this.fractionList.push(newFraction);
  }

  deleteFraction(fractionToDel: fraction) {
    const deleteFraction = this.fractionList.findIndex((fraction: fraction) => {
      return fraction === fractionToDel;
    });

    this.fractionList.splice(deleteFraction, 0);
  }
  showAllFractions() {
    console.log(this.fractionList);
  }

  findFaction(fracToFind: fraction) {
    const factionToFind = this.fractionList.find((find: fraction) => {
      return find === fracToFind;
    });
    console.log(factionToFind);
  }
  showAllHabarniks() {
    this.fractionList.forEach((frac: fraction) => {
        frac.showAlldeputat();
    });
  }

  showBiggestHabarnikFrac() {
    this.fractionList.forEach((frac: fraction) => {
        frac.showAllHabars();
    });
  }

  showAllDeputatsFrac() {
    this.fractionList.forEach((frac: fraction) => {
        frac.showAlldeputat();
    });
  }
  addNewFracDeputat(fractionName: fraction, newDeputat: deputat) {
    fractionName.addDeputat(newDeputat)
}
  deleteDeputatFromFrac (fractionName: fraction, OldDep: deputat){ 
    fractionName.deleteDeputat(OldDep);

}
}
