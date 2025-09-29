import {Auto} from "./auto.js";
import {ExtraAuto} from "./extraauto.js";

let auto1 = new Auto("Ford Puma", 2024, "szürke");
console.log(`Modell: ${auto1.modell}, Évjárat: ${auto1.evjarat}, ${auto1.getKor()} éves, Szín: ${auto1.szin}`);
let auto2 = new Auto("Opel Astra", 2010, "kék");
console.log(`Modell: ${auto2.modell}, Évjárat: ${auto2.evjarat}, ${auto2.getKor()} éves, Szín: ${auto2.szin}`);
let auto3 = new Auto("Suzuki Swift", 2015, "piros");
console.log(`Modell: ${auto3.modell}, Évjárat: ${auto3.evjarat}, ${auto3.getKor()} éves, Szín: ${auto3.szin}`);

let extraAuto1 = new ExtraAuto("Toyota Yaris", 2020, "fehér", 4.5, 40);
console.log(`Modell: ${extraAuto1.modell}, Évjárat: ${extraAuto1.evjarat}, ${extraAuto1.getKor()} éves, Szín: ${extraAuto1.szin}, Fogyasztás: ${extraAuto1.fogyasztas}L/100km, Üzemanyagtank: ${extraAuto1.uzemanyagtank}L, Max. távolság: ${extraAuto1.getMaxTavolsag()}km, Max. tankolás forintban: ${extraAuto1.getMaxForint()} Ft`);
let extraAuto2 = new ExtraAuto("Honda Civic", 2018, "fekete", 5.0, 50);
console.log(`Modell: ${extraAuto2.modell}, Évjárat: ${extraAuto2.evjarat}, ${extraAuto2.getKor()} éves, Szín: ${extraAuto2.szin}, Fogyasztás: ${extraAuto2.fogyasztas}L/100km, Üzemanyagtank: ${extraAuto2.uzemanyagtank}L, Max. távolság: ${extraAuto2.getMaxTavolsag()}km, Max. tankolás forintban: ${extraAuto2.getMaxForint()} Ft`);
let extraAuto3 = new ExtraAuto("Mazda 3", 2022, "ezüst", 6.0, 45);
console.log(`Modell: ${extraAuto3.modell}, Évjárat: ${extraAuto3.evjarat}, ${extraAuto3.getKor()} éves, Szín: ${extraAuto3.szin}, Fogyasztás: ${extraAuto3.fogyasztas}L/100km, Üzemanyagtank: ${extraAuto3.uzemanyagtank}L, Max. távolság: ${extraAuto3.getMaxTavolsag()}km, Max. tankolás forintban: ${extraAuto3.getMaxForint()} Ft`);