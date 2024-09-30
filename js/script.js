document.addEventListener("DOMContentLoaded", () => {
  loadPlayers();
});
let playersData = [];  // To store player data after loading the JSON
// Function to load the JSON data and display profiles
async function loadPlayers() {
  try {
    const response = await fetch('./data/players.json');  // Fetch the JSON file
    const data = await response.json();  // Parse the JSON data
    playersData = data;  // Store the data
    populateProfiles();  // Display the profiles
  } catch (error) {
    console.error('Error loading player data:', error);
  }
}
// Function to display profiles in the list
function populateProfiles() {
  const profileList = document.getElementById('player-list');
  profileList.innerHTML = '';  // Clear any existing profiles

  playersData.forEach((player, index) => {
    const profileDiv = document.createElement('div');
    profileDiv.className = 'player';
    profileDiv.setAttribute('onclick', `showProfile(${index})`);

    profileDiv.innerHTML = `<img src="${player.image}" alt="${player.name}">
      <p>${player.name}</p>
    `;

    profileList.appendChild(profileDiv);  // Add the profile to the list
  });
}
function off() {
  const profileDetailsDiv = document.getElementById('player-details');
  profileDetailsDiv.style.display = "none";
  const playerprofile = document.getElementById('player-profiles');
  playerprofile.style.display = "block";
}
function initializeMap(lat, lon) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZG9sb25kaGFyYSIsImEiOiJjbHowMmE5dmYyamMzMmxzZ2xoa3ZwN3loIn0.zipA3mk1nPQeG3OnfcBxgA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [lon,lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 3 // starting zoom
    });
}
// Function to display player profile in the right div
function showProfile(playerIndex) {
  const player = playersData[playerIndex];
  const profileDetailsDiv = document.getElementById('player-details');

  // Display player's career statistics and achievements
  const statistics = `
    Matches: ${player.career_statistics.matches}<br>
    Runs: ${player.career_statistics.runs}<br>
    Centuries: ${player.career_statistics.centuries}<br>
    Highest Score: ${player.career_statistics.highest_score}
  `;
  const achievements = player.achievements.map(achievement => `<li>${achievement}</li>`).join('');

  // Update the profile details div with the player's information
  profileDetailsDiv.innerHTML = `
    <i id="arrow" onClick="off()" class="fa-solid fa-arrow-left"></i>
    <h2>${player.name}</h2>
    <img src="${player.image}" alt="${player.name}">
    <p><strong>Country:</strong> ${player.country}</p>
    <p><strong>Career Statistics:</strong><br><div id="stac">${statistics}</div></p>
    <p><strong>Achievements:</strong></p>
    <ul>${achievements}</ul>
    <div id="map"></div> <!-- The map will be displayed here -->
  `;
  const playerprofile = document.getElementById('player-profiles');
  profileDetailsDiv.style.display = "block";
  playerprofile.style.display = "none";
  initializeMap(player.location.latitude,player.location.longitude); 
}





