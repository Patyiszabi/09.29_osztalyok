var data = null;

var xhr = new XMLHttpRequest();

let uzemanyagAr = null; 

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    const response = JSON.parse(this.responseText);
    const hungary = response.result.find(country => country.country === "Hungary");
    if (hungary) {
      uzemanyagAr = hungary.gasoline;
      console.log("Magyar átlag üzemanyag ár:", uzemanyagAr, "EUR/L");
    }
  }
});

xhr.open("GET", "https://api.collectapi.com/gasPrice/europeanCountries");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 5nsJtsKxQl7hREmAn80b1w:1GnS2FEi4gdEPWVbLxEoAL");

xhr.send(data);

import {Auto} from "./auto.js";

export class ExtraAuto extends Auto {
    constructor(modell, evjarat, szin, fogyasztas, uzemanyagtank) {
        super(modell, evjarat, szin);
        this._fogyasztas = fogyasztas;
        this._uzemanyagtank = uzemanyagtank;
    }
    get fogyasztas() {
        return this._fogyasztas;
    }
    set fogyasztas(fogyasztas) {
        this._fogyasztas = fogyasztas;
    }
    get uzemanyagtank() {
        return this._uzemanyagtank;
    }
    set uzemanyagtank(uzemanyagtank) {
        this._uzemanyagtank = uzemanyagtank;
    }
    getMaxTavolsag() {
        return (this._uzemanyagtank / this._fogyasztas) * 100;
    }
    getMaxForint() {
        return this._uzemanyagtank * (uzemanyagAr * 400);
    }
}