async function getData() {
  const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=IVY`);
  const data = await response.json();
  
  console.log(data);
}

getData();

let mainContainer = document.getElementById("data");



/*https://data.cityofnewyork.us/resource/43nn-pn8j.json

const nameUrl = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=";

const restName = document.getElementById("blank").value;

button.addEventListener('click', getRest() {
  const response = await fetch(`${nameUrl}` + `${restName}`);
  const data = await response.json();
  console.log(data);
});
getRest();
*/





