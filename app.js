async function getData() {
  //sanitize search input
  let place = document.getElementById("searchInput").value.toUpperCase();
  //console.log(place)
  // fetch data and append input to endpoint
  
  const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=` + place);
  const data = await response.json();

  //push restaurant name from object and set under Name p
  /*const restName = document.getElementById("Name");
  restName.innerHTML = data[0].dba;

  const foodGrade = document.getElementById("rating");
  foodGrade.innerHTML = data[0].grade;

  const violations = document.getElementById("violations");
  violations.innerHTML = data[0].violation_description;
  
  const address = document.getElementById("address");
  address.innerHTML = [data[0].building +" "+ data[0].street + " "+ data[0].boro + " "+ data[0].zipcode];
  
  const cuisine = document.getElementById("cuisine");
  cuisine.innerHTML = data[0].cuisine_description;

  const restScore = document.getElementById("score");
  restScore.innerHTML = data[0].score;
    

 for (let i = 0; i < data.length; i++){
   console.log(data[i]);
 }
*/

  //data.forEach(function (data) {
    
//});
  
  }
 



///set event listener to button to listen to onclick and trigger getData function
document.getElementById("searchBtn").addEventListener('click', event => {
  getData();
});






