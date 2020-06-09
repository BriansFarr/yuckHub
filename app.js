async function getData() {
  const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?`);
  const data = await response.json();
  console.log(data);
}

getData();


// https://data.cityofnewyork.us/resource/43nn-pn8j.json

///*const nameUrl = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=";

//const restName = document.getElementById("blank").value;

//function getRest() {
 // const response = await fetch(`${nameUrl}+${restName}`);
 // const data = await response.json();
 // console.log(data);
//}

//getRest();
