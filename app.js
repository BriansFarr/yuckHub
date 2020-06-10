async function getData() {
  //console.log("are we here")
  let place = document.getElementById("searchInput").value.toUpperCase();
  //console.log(place)
  const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=` + place);
  const data = await response.json();
  
  const restName = document.getElementById("Name");
  restName.innerHTML = data[0].dba;

  const foodGrade = document.getElementById("rating");
  foodGrade.innerHTML = data[0].grade;

  const violations = document.getElementById("violations");
  violations.innerHTML = data[0].violation_description;
  violations1.innerHTML = data[1].violation_description;
  violations2.innerHTML = data[2].violation_description;
  
  const address = document.getElementById("address");
  address.innerHTML = [data[0].building +" "+ data[0].street + " "+ data[0].boro];
  
  const cuisine = document.getElementById("cuisine");
  cuisine.innerHTML = data[0].CUISINE_DESCRIPTION
    
  }
 

  // now push first object in the array of data into an empty object then return that variable

 


document.getElementById("searchBtn").addEventListener('click', event => {
  getData();
});


// getData()



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





