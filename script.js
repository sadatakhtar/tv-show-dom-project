//SELECTORS
const allShows = getAllEpisodes();
let mainDiv = document.querySelector('.main');
let liveSearchBox = document.getElementById('searchBox');
let totalEpisodes = getAllEpisodes().length;
let clearButton = document.getElementById('clearBtn');
let showAllEpisodes = document.getElementById('showAllBtn');

function setup() {
  const allEpisodes = getAllEpisodes();
  mainCards(); 
  selectMenu();
}
window.onload = setup;

//DISPLAYS ALL EPISODES
function mainCards(){
  for(let i=0; i< allShows.length; i++){
    //CREATE ELEMENTS
    let displayCardDiv = document.createElement('div');
    displayCardDiv.id = "card";
    displayCardDiv.style.overflow= "auto";
    let title = document.createElement('h2');
    title.id = "cardTitle";
    let cardImage = document.createElement('img');
    let cardSummary = document.createElement('p');
    cardSummary.id= "cardSummary";
    let displayResult = document.getElementById('display');

    //ADD CONTENTS TO ELEMENTS
    title.textContent= `${allShows[i].name} - S0${allShows[i].season}E0${allShows[i].number}`;
    cardImage.src = `${allShows[i].image.medium}`;
    cardImage.style.borderRadius = "5px"
    cardSummary.textContent = `${allShows[i].summary}`;
    displayResult.textContent = `Displaying ${allShows.length}/${totalEpisodes} Episodes`;

    //APPEND ELEMENTS TO PARENT
    mainDiv.appendChild(displayCardDiv);
    displayCardDiv.appendChild(title);
    displayCardDiv.appendChild(cardImage);
    displayCardDiv.appendChild(cardSummary);
  }
}

//EVENT LISTENERS
showAllEpisodes.onclick = () => {
  location.reload();
}
clearButton.onclick = () =>{
  document.getElementById('searchBox').value = '';
  location.reload();
  mainDiv.textContent="";
  
}
liveSearchBox.addEventListener('input', searchHandler);

function searchHandler(){
  let searchResult = liveSearchBox.value.toLowerCase();
  let filteredEpisodes = allShows.filter(({name, summary}) => {
    return (name.toLowerCase().includes(searchResult) || summary.toLowerCase().includes(searchResult));
  });

  //REMOVES PREVIOUS RESULTS
  mainDiv.textContent= "";

  for(let i=0; i< filteredEpisodes.length; i++){
    //CREATE ELEMENTS
    let displayCardDiv = document.createElement('div');
    displayCardDiv.id = "card";
    displayCardDiv.style.overflow= "auto";
    let title = document.createElement('h2');
    title.id = "cardTitle";
    let cardImage = document.createElement('img');
    let cardSummary = document.createElement('p');
    cardSummary.id= "cardSummary";
    let displayResult = document.getElementById('display');

    //ADD CONTENT TO ELEMENTS
    title.textContent= `${filteredEpisodes[i].name} - S0${filteredEpisodes[i].season}E0${filteredEpisodes[i].number}`;
    cardImage.src = `${filteredEpisodes[i].image.medium}`;
    cardImage.style.borderRadius = "5px"
    cardSummary.textContent = `${filteredEpisodes[i].summary}`;
    displayResult.textContent = `Displaying ${filteredEpisodes.length}/${totalEpisodes} episodes`;

    //APPEND TO PARENT NODES
    mainDiv.appendChild(displayCardDiv);
    displayCardDiv.appendChild(title);
    displayCardDiv.appendChild(cardImage);
    displayCardDiv.appendChild(cardSummary);
  }
}
  
let selectTag = document.getElementById('episodes');

//DISPLAYS ALL EPISODES IN DROP DOWN MENU
function selectMenu(){
  for(let i=0; i<allShows.length; i++){
     let optionTag = document.createElement('option');
     optionTag.value= i;
     optionTag.textContent = `S0${allShows[i].season}E0${allShows[i].number} - ${allShows[i].name}`;
     selectTag.appendChild(optionTag);
  } 
}

function selectEpisode(x){
  //CLEAR SCREEN
  mainDiv.textContent= "";

  //CREATE ELEMENTS
  let displayCardDiv = document.createElement('div');
  displayCardDiv.id = "card";
  let title = document.createElement('h2');
  title.id = "cardTitle";
  let cardImage = document.createElement('img');
  let cardSummary = document.createElement('p');
  cardSummary.id= "cardSummary";
  let displayResult = document.getElementById('display');

  //ADD CHANGES TO ELEMENTS
  title.textContent= `${allShows[x.value].name} - S0${allShows[x.value].season}E0${allShows[x.value].number}`;
  cardImage.src = `${allShows[x.value].image.medium}`;
  cardImage.style.borderRadius = "5px"
  cardSummary.textContent = `${allShows[x.value].summary}`;
  displayResult.textContent = `Displaying 1/${totalEpisodes} episodes`;


  //APPEND ELEMENTS TO PARENT NODES
  mainDiv.appendChild(displayCardDiv);
  displayCardDiv.appendChild(title);
  displayCardDiv.appendChild(cardImage);
  displayCardDiv.appendChild(cardSummary);

}
