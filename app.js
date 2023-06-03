var cars = {
    Honda: {
        Civic: {
            model_2020:{
                Make: "Civic",
                Model: 2020,
                Price: "PKR 7,000,000",
                Fuel: "Petrol",
                City: "Karachi",
                img: "Images/civic-2020.jpg"
            },
            model_2015:{
                Make: "Civic",
                Model: 2015,
                Price: "PKR 4,000,000",
                Fuel: "CNG",
                City: "Lahore",
                img: "Images/civic-2015.jpg"
            },
            model_2022:{
                Make: "Civic",
                Model: 2022,
                Price: "PKR 9,000,000",
                Fuel: "Petrol",
                City: "Islamabad",
                img: "Images/civic-2022.jpg"
            }
        },
        City: {
            model_2020:{
                Make: "City",
                Model: 2020,
                Price: "PKR 3,500,000",
                Fuel: "Petrol",
                City: "Lahore",
                img: "Images/city-2020.jpg"
            },
            model_2017:{
                Make: "City",
                Model: 2017,
                Price: "PKR 2,350,000",
                Fuel: "CNG",
                City: "Karachi",
                img: "Images/city-2017.jpg"
            },
            model_2013:{
                Make: "City",
                Model: 2013,
                Price: "PKR 1,970,000",
                Fuel: "CNG",
                City: "Faisalabad",
                img: "Images/city-2013.jpg"
            },
            model_2016:{
                Make: "City",
                Model: 2016,
                Price: "PKR 2,500,000",
                Fuel: "CNG",
                City: "Multan",
                img: "Images/city-2016.jpg"
            },
            model__2017:{
                Make: "City",
                Model: 2017,
                Price: "PKR 3,040,000",
                Fuel: "Petrol",
                City: "Rawalpindi",
                img: "Images/city--2017.jpg"
            }
        }
    },
    Toyota: {
        Corolla: {
            model_2021:{
                Make: "Corolla",
                Model: 2021,
                Price: "PKR 5,450,000",
                Fuel: "Petrol",
                City: "Rawalpindi",
                img: "Images/corolla-2021.jpg"
            },
            model_2019:{
                Make: "Corolla",
                Model: 2019,
                Price: "PKR 3,950,000",
                Fuel: "CNG",
                City: "Karachi",
                img: "Images/corolla-2019.jpg"
            },
        },
        Fortuner: {
            model_2020: {
                Make: "Fortuner",
                Model: 2020,
                Price: "PKR 12,900,000",
                Fuel: "Diesel",
                City: "Islamabad",
                img: "Images/fortuner-2020.jpg"
            },
            model_2022: {
                Make: "Fortuner",
                Model: 2022,
                Price: "PKR 20,000,000",
                Fuel: "Petrol",
                City: "Karachi",
                img: "Images/fortuner-2022.jpg"
            },
            model_2021: {
                Make: "Fortuner",
                Model: 2021,
                Price: "PKR 18,500,000",
                Fuel: "Diesel",
                City: "Karachi",
                img: "Images/fortuner-2021.jpg"
            }
        }
    }
}

var userText = document.querySelectorAll("#text")[0];
var cardCon = document.querySelectorAll(".card-con")[0];



// FUNCTION - RECEVING DATA FROM OBJECTS AND PRINITING DYNAMICALLY ON DOM
function objPrint(){
    for (var key in cars){
        var carMakeKey = cars[key];
        for(var key2 in carMakeKey){
            var carModelKey = carMakeKey[key2];
            for(var key3 in carModelKey){
                var carDetailKey = carModelKey[key3]
                var carCard = `
                <div class="car-card">
                    <div class="car-image">
                        <img class="image" src="${carDetailKey.img}" alt="">
                    </div>
                    <div class="car-detail">
                        <h2 class="make">${carDetailKey.Make.toUpperCase()} - <span class="model">${carDetailKey.Model}</span></h2>
                        <h3>${carDetailKey.Price} | <span class="price">${carDetailKey.City}</span></h3>
                    </div>
                </div>
                `
                cardCon.innerHTML += carCard
            }
        }
    }
}
window.addEventListener("load", objPrint); //Printing Object Data On Load



userText.addEventListener('input', runSearch); //Finding Data in Obj in Real Time
//FUNCTION - RECEIVING DATA FROM OBJECT AND FINDING IT BASED ON USER SEARCH
function runSearch(){
    var userAsk = userText.value.toUpperCase();
    var matchFound = false;
    cardCon.innerHTML = "";

    for(var key in cars){
        var carObjKey = cars[key];
        for(var key2 in carObjKey){
            var carObjKey2 = carObjKey[key2];
            // console.log(carObjKey2);         
            for(var key3 in carObjKey2){
                
                var carObjKey3 = carObjKey2[key3];
                var carMakes = carObjKey3.Make.toUpperCase();
                
                if(carMakes.includes(userAsk)){
                    matchFound = true;
                    
                    var carCard = `
                    <div class="car-card">
                        <div class="car-image">
                            <img class="image" src="${carObjKey3.img}" alt="">
                        </div>
                        <div class="car-detail">
                            <h2 class="make">${carMakes} - <span class="model">${carObjKey3.Model}</span></h2>
                            <h3>${carObjKey3.Price} | <span class="price">${carObjKey3.City}</span></h3>
                        </div>
                    </div>
                    `
                    cardCon.innerHTML += carCard;
                }
            }
        }
    }

    if (!matchFound) {
        // cardCon.innerHTML = ''; // Clear the previous search results
        var noMatchCard = `
          <div class="no-match-card">
            <h2>No matching cars found.</h2>
          </div>
        `;
        cardCon.innerHTML = noMatchCard;
      }
}  



function runFilter(carSelect) {
    cardCon.innerHTML = '';
    var companySelect = cars[carSelect]
    for(var key in companySelect){
        for(var key2 in companySelect[key]){
            var companyDetail =  companySelect[key][key2];
            var carCard = `
            <div class="car-card">
                <div class="car-image">
                    <img class="image" src="${companyDetail.img}" alt="">
                </div>
                <div class="car-detail">
                    <h2 class="make">${companyDetail.Make} - <span class="model">${companyDetail.Model}</span></h2>
                    <h3>${companyDetail.Price} | <span class="price">${companyDetail.City}</span></h3>
                </div>
            </div>
        `
        cardCon.innerHTML += carCard;
        }
    }
    
}

function loadPage(){
    location.reload();
}