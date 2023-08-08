// Write your helper functions here!
// TODO: window load handler;
// TODO: set up submit handler for the formsubmission;
    // TODO: within submit handler for form call event.preventtDefault() to cancel submission;
    // TODO: validate that all inputs have data in them;
        // EX: to check if fuelLevel/Cargo Mass is Numbers and not a sting ~ document.querySelector("[name=fuellevel]").value
    // TODO: check fuel level and cargo mass, and report launchStatus
    // TODO: make the list visible ~ 

    // TODO: fetch planetary data
      // TODO: randomly choose one of the planets
      // TODO: display info about the chosen planet

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const missionTarget = document.getElementById("missionTarget");
   
    missionTarget.innerHTML = `
        
            <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
        
        `;

 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    } else if (isNaN(testInput) === false){
        return "Is a Number"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    }
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //if/else if for alerts 
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert('ALL FIELDS REQUIRED!')
    }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("R2D2 is not piloting the spaceship, please do not use Numbers for their Names")
    }else if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        alert("Requires numbers in Fuel Level and Cargo Mass")
    }
    let launchStatus = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let listStyle = document.getElementById('faultyItems');
    let cargoStatus = document.getElementById('cargoStatus')
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus'); 

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //update status of lvls
    

    if(fuelLevel < 10000){
        listStyle.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = 'red';
    }else if (cargoMass > 10000){   
        listStyle.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = 'red';
    } else if (cargoMass > 10000 && fuelLevel < 10000) {
        listStyle.style.visibility = 'visible';
        launchStatus.style.color = 'red';
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle not Ready for Launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    } else {
        listStyle.style.visibility = 'visible';
        launchStatus.style.color = 'green';
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }

// console.log(document,"here!")
// console.log(list, "LIST")
 };


 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    randomPlanet = Math.floor(Math.random()*planets.length)
    return(planets[randomPlanet])
 }
 

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;