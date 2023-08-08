// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener('submit', function(event){
    event.preventDefault();

    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems");
//update status if lvls are good or not
    // let pilotStatus = document.getElementById('pilotStatus');
    // let copilotStatus = document.getElementById('copilotStatus');
    // let fuelStatus = document.getElementById('fuelStatus');
    // let cargoStatus = document.getElementById('cargoStatus');


    // pilotStatus.innerHTML = `Pilot: ${pilot} is ready for launch`;
    // copilotStatus.innerHTML = `Copilot: ${copilot} is ready for launch`;


    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

})

    let listedPlanets;
    let listedPlanetsResponse = myFetch() 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
    let planet = pickPlanet(listedPlanets)
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let moons = planet.moons;
    let imageUrl = planet.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    })

 });