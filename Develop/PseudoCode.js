//** PSEUDO CODE Search Page
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


var searchBtnEl = document.querySelector('#search-form');

function CitySearchBtn(event) {
    event.preventDefault();

    var cityNameVal = document.querySelector('#search-input').value;

    if (!cityNameVal) {
        console.log('Please input City Name');
        return;
        }

    var searchResultsPage = './search-results.html?q=' + cityNameVal;

    location.assign(searchResultsPage);
}

searchBtnEl.addEventListener('submit', CitySearchBtn);





   
 
            
    





// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// hint: this will be a teather to the event listener
// ////// FUNCTION ////// WILL BE REUSED FOR EACH CITY SEARCHED IN INPUT
//     // WRITE FETCH CALL TO APIS
//         // find the information that we want to display from the API call reponse
//             // FOR TODAYS DATE 
//             // 5 DAY FORECAST


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
 
 
 
 
 ///// 
 // fetch call #1
    // user will enter a city name 
        //returns lat/long
            // fetch call #2 (takes in lat/long)
                // returns Weather Data
                    // fetch call #3 (takes in icon Id) 
                        // returns icon img

    // ** BREAK THE ABOVE INTO FUNCTION ** // REMOVE THIS PSEUDOCODE BEFORE SUBMISSION 
//** remember that a return HAS TO ALWAYS BE LAST COMMAND within a function - if you need data from function to use elsewhere within code, use return. If function is only used to display or do something on the page without being necessary somewhere else in the code, you do not need to use return


// return example:
// var funcOne = () ==> {
//     let number = 2;
//     return number; 
// }

// var funcTwo = () => {
//     funcOne();
// }


