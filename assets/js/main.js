const height = document.querySelector("#height");
const age = document.querySelector("#age");
const weight = document.querySelector("#weight");
const female = document.querySelector("#female");
const male = document.querySelector("#male");
const select = document.querySelector("#select");
let grundUmsatzKcal = document.querySelector("#grund-umsatz-kcal");
let grundUmsatzKj = document.querySelector("#grund-umsatz-kj");
let gesamtUmsatzKcal = document.querySelector("#gesamt-umsatz-kcal");
let gesamtUmsatzKj = document.querySelector("#gesamt-umsatz-kj");
let form = document.querySelector("#form");

const submitBtn = document.querySelector("#submit");
// to make addeventlistner work with the required attribute
// we listen to submit event on the form itself not the submit btn and not to click event and we need
// to add a name attribute to our input field
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  // submit.addEventListener(`click`, (event) => {
  //   event.preventDefault();
  if (
    height.value.includes(`-`) ||
    age.value.includes(`-`) ||
    weight.value.includes(`-`)
  ) {
    window.alert(`bitte eine positiven wert eingeben`);
  } else if (
    female.checked &&
    height.value !== " " &&
    age.value !== " " &&
    weight.value !== " "
  ) {
    const grundKcal = (
      655.1 +
      9.6 * Number(weight.value) +
      1.8 * Number(height.value) -
      4.7 * Number(age.value)
    ).toFixed(0);
    grundUmsatzKcal.innerHTML = Number(grundKcal).toLocaleString("de-DE");

    const grundKj = (
      (655.1 +
        9.6 * Number(weight.value) +
        1.8 * Number(height.value) -
        4.7 * Number(age.value)) *
      4.184
    ).toFixed(0);
    grundUmsatzKj.innerHTML = Number(grundKj).toLocaleString("de-DE");

    const gesamtKcal = (Number(grundKcal) * select.value).toFixed(0);
    gesamtUmsatzKcal.innerHTML = Number(gesamtKcal).toLocaleString("de-DE");

    const gesamtKj = (Number(gesamtKcal) * 4.184).toFixed(0);
    gesamtUmsatzKj.innerHTML = Number(gesamtKj).toLocaleString("de-DE");
  } else if (
    male.checked &&
    height.value !== " " &&
    age.value !== "" &&
    weight.value !== " "
  ) {
    const grundKcal = (
      664.7 +
      13.7 * Number(weight.value) +
      5 * Number(height.value) -
      6.8 * Number(age.value)
    ).toFixed(0);
    grundUmsatzKcal.innerHTML = Number(grundKcal).toLocaleString("de-DE");

    const grundKj = (
      (664.7 +
        13.7 * Number(weight.value) +
        5 * Number(height.value) -
        6.8 * Number(age.value)) *
      4.184
    ).toFixed(0);
    grundUmsatzKj.innerHTML = Number(grundKj).toLocaleString("de-DE");

    const gesamtKcal = (Number(grundKcal) * select.value).toFixed(0);
    gesamtUmsatzKcal.innerHTML = Number(gesamtKcal).toLocaleString("de-DE");

    const gesamtKj = (Number(gesamtKcal) * 4.184).toFixed(0);
    gesamtUmsatzKj.innerHTML = Number(gesamtKj).toLocaleString("de-DE");
  } else {
    window.alert(`ein Fehler ist aufgetreten`);
  }
});
