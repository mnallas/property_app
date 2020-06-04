const House = require("./util/House");
const Apartment = require("./util/Apartment");

const myHouse = new House("28 lajslkjasd", true, true);
myHouse.addToTenants(["Myhkas", "Nallas"]);
myHouse.addToPets(["Monggi", "Simo"]);
myHouse.addToPets(["Leyo"]);

const myApt = new Apartment("123 Fourfivesix ST", "Apt 1");
myApt.addToTenants(["Mark", "Luke", "John"]);
myApt.addToPets(["Conrad"]);

console.log(myHouse);
console.log(myApt);
