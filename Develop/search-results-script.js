//** PSEUDO CODE JS file 2 - Search Results 
/**
 * GIVEN a weather dashboard with form inputs
 * 
 * 
 * 
 * 
 *
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
*/ 

// SKELETON HTML - FORM SEARCH BAR INPUT, HEADER THEN REST CAN BE JS AND CSS
    // CREATE DIVS WHERE OUR DATA WILL BE DISPLAYED TO
        // CURRENT WEATHER, 5 DAY WEATHER AND LIST OF HISTORY
    // DO SOME BASIC CSS JUST TO ENSURE BASIC LAYOUT IS THERE
// BRING IN DAY(JS)
// ADD INPUT FIELD FOR SEARCH BAR

var cityDiv = document.getElementById('citydiv');


var currentTimeEl = $('#time');
function displayTime() {
  var rightNow = dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a');
  currentTimeEl.text(rightNow);
};
displayTime();
setInterval(displayTime, 1000);





// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// CHECK OUT DATA RETURNED FROM API
// https://openweathermap.org/api/geocoding-api THIS WILL TAKE IN CITY NAME AND COUNTRY CODE - THEN WILL RETURN LATITUDE AND LONGITUDE 
// https://openweathermap.org/forecast5 THIS NEEDS LATITUDE AND LONGITUDE - GET RESPONSE FROM GEOCODING API TO DO SO 
  // THIS WILL RETURN TEMPERATURE, HUMIDITY, WIND SPEED

// ADD EVENT LISTENER TO:
      // SEARCH BUTTON 
      // EACH HISTORY BUTTON - THIS WILL NEED TO BE AN IF STATEMENT I THINK

// hint: if either of these do not provide sufficient data, may need to use a third API ----- use ICON Id API - do this last if time allows 



var searchBtnEl = document.querySelector('#searchbtn');

function CitySearchBtn(event) {
    event.preventDefault();

    var cityNameVal = document.querySelector('#search-input').value;
    if (!cityNameVal) {
        window.alert("Please choose a city");
    } else {
    console.log(cityNameVal);
    returnLatLongApi(cityNameVal);
    }
}

searchBtnEl.addEventListener('click', CitySearchBtn);


 




// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// hint: this will be a teather to the event listener
// ////// FUNCTION ////// WILL BE REUSED FOR EACH CITY SEARCHED IN INPUT
//     // WRITE FETCH CALL TO APIS
//         // find the information that we want to display from the API call reponse
//             // FOR TODAYS DATE 
//             // 5 DAY FORECAST


// CHECK OUT DATA RETURNED FROM API
// https://openweathermap.org/api/geocoding-api THIS WILL TAKE IN CITY NAME AND COUNTRY CODE - THEN WILL RETURN LATITUDE AND LONGITUDE http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&appid={API key}  
// https://openweathermap.org/forecast5 THIS NEEDS LATITUDE AND LONGITUDE - GET RESPONSE FROM GEOCODING API TO DO SO 
// THIS WILL RETURN TEMPERATURE, HUMIDITY, WIND SPEED




function forecastApi(lat, lon) {
    
    const forecastOptions = {method: 'GET'};
    
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=92e6198cc23e5a6a269f50f1f699c15a`, forecastOptions)
    .then(response => response.json())
    .then(response => {console.log("second fetch", response)
    firstDay(response)})
    .then(response => {console.log("next day forecast", response)
    nextDays(response)})
    .catch(err => console.error(err));
}


// now pass lat and long data from geoAPI through 5 day forecast API

function returnLatLongApi(nameCity) {
    const options = {method: 'GET'};
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&appid=92e6198cc23e5a6a269f50f1f699c15a`, options)
    .then((response) => 
    // console.log(response))
    response.json())
    .then(response => { console.log(response) 
        forecastApi(response[0].lat, response[0].lon)})
        .catch(err => console.error(err));
        
    }
    
    

    

    
    
    
    
    
    
    
    
    
    function firstDay(data){
        var resultCard = document.createElement('div');
        resultCard.classList = 'card-body';
        cityDiv.append(resultCard);
        
        var cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');
        resultCard.append(cardDetails);
        console.log(data, "first day card details");
        
    var cardDate = document.createElement('h3');
    cardDate.textContent = data.list[0].dt_txt;
    resultCard.append(cardDate);

    

    var cardData = document.createElement('div');

    var temp = document.createElement('p');
        temp.textContent = (data.list[0].main.temp);
        cardData.append(temp, "Celcius");

        var humidity = document.createElement('p');
        humidity.textContent = data.list[0].main.humidity;
        cardData.append(humidity, "% Humidity" );

        var wind = document.createElement('p');
        wind.textContent = data.list[0].wind.speed;
        cardData.append(wind, "mph");

        var icon = document.createElement('p');
        icon.textContent = data.list[0].weather[0].description;
        cardData.append(icon);
        
        resultCard.append(cardData)
        console.log(cardData, "first day data")
    } 

    
    
    var resultTextEl = document.querySelector('#city-value-text');
    var resultContentEl = document.querySelector('#city-value-results');
    var searchFormEl = document.querySelector('#search-form');
    
    
    function nextDays(data) {
        var nextDayCard = document.createElement('div');
        nextDayCard.classList = 'card-body';
        cityDiv.append(nextDayCard);
        
        var cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');
        nextDayCard.append(cardDetails);
        
        var cardDate = document.createElement('h3');
    cardDate.textContent = data.list[6].dt_txt;
    nextDayCard.append(cardDate);
    
    //  use for loop here to set up dynamic div that will open up cards for 5 day forecast results to display in

    for (let i = 0; i < data.list.length; i++) {
            temp.textContent = data.list[6].main.temp;
            humidity.textContent = data.list[6].main.humidity;
            wind.textContent = data.list[6].wind.speed;
            icon.textContent = data.list[6].weather[6].description;
        }
    nextDayCard.append(cardDate)
        
}


// hint: this will be a teather to the event listener
// ////// RENDER FUNCTION ///////
// // programmatically display the above data to the page
//     // for loop 5 x (5 days)
//         // create x card - dates will = x
//             / add x.header
//             // add x.image --- image can be found in api code under 'icon'
//             // add x.temp
//             // add x.wind
//             // add. x.humidity
//             append x card to a named div 










// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


// ADD LOCAL STORAGE
// WHEN PAGE LOADS, GRAB ALL OF THE CITIES IN LOCALSTROAGE
// WHEN A CITY NAME IS INPUT, AND THE SEARCH BUTTON IS CLICKED - APPEND THE CITY TO EXISTING TO LOCAL STORAGE
// use JSON.parse -- reference challenge 5 for this 



// var textAreaEl = document.querySelector('.search-input');

//     var saveButtonInput = document.querySelector('.btn-search');

//     $(".btn-search").on("click", function() {
//       var value = $(this).siblings(".search-input").val();
//       console.log(value);

//       var storageKey = $(this).parent().attr("id");
//       console.log(storageKey);
//       localStorage.setItem(storageKey, value); 

//     });

    
    console.log(localStorage.setItem('search-input', resultTextEl));

    $('search-input').val(localStorage.getItem("form w-100"));

/// Why you no worky???











///// 
// fetch call #1
// user will enter a city name 
  //returns lat/long
      // fetch call #2 (takes in lat/long)
          // returns Weather Data
              // fetch call #3 (takes in icon Id) 
                  // returns icon img


//** remember that a return HAS TO ALWAYS BE LAST COMMAND within a function - if you need data from function to use elsewhere within code, use return. If function is only used to display or do something on the page without being necessary somewhere else in the code, you do not need to use return


// return example:
// var funcOne = () ==> {
//     let number = 2;
//     return number; 
// }

// var funcTwo = () => {
//     funcOne();
// } 
