const euro = document.getElementById('euro');
const dollar = document.getElementById('dollar');
const rubli = document.getElementById('rubli');
const jeny = document.getElementById('jeny');

euro.addEventListener('input', euroToDollarToRubiToJeny);

function euroToDollarToRubiToJeny() {
    const eu = parseInt(euro.value);
    const dl = 1.11 * eu;
    const rub = eu * 0.015;
    const yen = eu * 0.0084;
    dollar.value = dl.toFixed(3);
    rubli.value = rub.toFixed(3);
    jeny.value = yen.toFixed(3);

}

euroToDollarToRubiToJeny();

dollar.addEventListener('input', dollarToEuroToRubliToJeny);

function dollarToEuroToRubliToJeny() {
    const dl = parseFloat(dollar.value);
    const eu = dl * 0.80;
    const rub = dl * 9.38;
    const yen = dl * 0.58;
    euro.value = eu.toFixed(3);
    rubli.value = rub.toFixed(3);
    jeny.value = yen.toFixed(3);
}


rubli.addEventListener('input', rubliToEuroToDollarToJeny);

function rubliToEuroToDollarToJeny() {
    const rub = parseFloat(rubli.value);
    const eu = rub * 0.00023;
    const dl = rub * 109.76;
    const yen = rub * 63.45;
    euro.value = eu.toFixed(3);
    dollar.value = dl.toFixed(3);
    jeny.value = yen.toFixed(3);
}

jeny.addEventListener('input', jenyToEuroToDollarToRubli);

function jenyToEuroToDollarToRubli() {
    const yen = parseFloat(jeny.value);
    const eu = yen * 0.067;
    const dl = yen * 0.0091;
    const rub = yen * 0.58;
    euro.value = eu.toFixed(3);
    dollar.value = dl.toFixed(3);
    rubli.value = rub.toFixed(3);
}