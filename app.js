async function getData() {
  console.log("are we here")
  let place = document.getElementById("searchInput").value.toUpperCase();
  console.log(place)
  const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=` + place);
  const data = await response.json();
  // now push first object in the array of data into an empty object then return that variable
  //console.log(data, data[0].dba);
  let result = []
  
  console.log(result);
}



document.getElementById("searchBtn").addEventListener('click', event => {
  getData();
});




// getData()

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





