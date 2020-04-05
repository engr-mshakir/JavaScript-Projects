let database = '{\"firstname\": \"Muhammad\", \"middleinitial\": \"M\", \"lastname\": \"Shakir\", \"address\": \"924 Griffin Ave\", \"city\": \"Gadsden\", \"state\": \"AL\", \"zip\": \"35903\"}';
let object = JSON.parse(database);
console.log("Before Conversion: - ", typeof database);
console.log(" After Conversion: - ", typeof object);
const jsonOutput = document.getElementById('jsonOutput');

const conversion = document.getElementById('conversion');
conversion.addEventListener('click', showConversion);

function showConversion() {
    jsonOutput.innerHTML = `
        <strong> Your Full Information:</strong> <br>
    ${object.firstname} <span> ${object.middleinitial} </span> ${object.lastname} <br>
    ${object.address} <br>
    ${object.city} , ${object.state} ${object.zip}`;
}