//SELECTORS
let mainDiv = document.querySelector('.main');
let liveSearchBox = document.getElementById('searchBox');
let clearButton = document.getElementById('clearBtn');
let showAllEpisodes = document.getElementById('showAllBtn');
let selectTag = document.getElementById('episodes');


function setup() {
  getEpisodesFromApi(); 

}
window.onload = setup;


function getEpisodesFromApi(){
  fetch('https://api.tvmaze.com/shows/82/episodes')
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    let totalEpisodes = data.length;
    
    //EVENT LISTENERS
    showAllEpisodes.onclick = () => {
      location.reload();
    }
    clearButton.onclick = () =>{
    document.getElementById('searchBox').value = '';
    mainDiv.textContent="";
    location.reload();
    }
    liveSearchBox.addEventListener('input', searchHandler);

    //DISPLAYS ALL EPISODES
    for(let i=0; i< data.length; i++){
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
      title.textContent= `${data[i].name} - S0${data[i].season}E0${data[i].number}`;
      cardImage.src = `${data[i].image.medium}`;
      cardImage.style.borderRadius = "5px"
      cardSummary.textContent = `${data[i].summary}`;
      displayResult.textContent = `Displaying ${data.length}/${totalEpisodes} Episodes`;

      //APPEND ELEMENTS TO PARENT
      mainDiv.appendChild(displayCardDiv);
      displayCardDiv.appendChild(title);
      displayCardDiv.appendChild(cardImage);
      displayCardDiv.appendChild(cardSummary);

    }

    function searchHandler(){
      let searchResult = liveSearchBox.value.toLowerCase();
      let filteredEpisodes = data.filter(({name, summary}) => {
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
    
    function selectMenu(){
      for(let i=0; i<data.length; i++){
         let optionTag = document.createElement('option');
         optionTag.value= i;
         optionTag.textContent = `S0${data[i].season}E0${data[i].number} - ${data[i].name}`;
         selectTag.appendChild(optionTag);
      } 
    }
    selectMenu();
    selectTag.addEventListener('change', selectEpisode);
    //DISPLAYS SELECTED EPISODE FROM DROPDOWN
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

      //ADD CONTENT TO ELEMENTS
      title.textContent= `${data[x.target.value].name} - S0${data[x.target.value].season}E0${data[x.target.value].number}`;
      cardImage.src = `${data[x.target.value].image.medium}`;
      cardImage.style.borderRadius = "5px"
      cardSummary.textContent = `${data[x.target.value].summary}`;
      displayResult.textContent = `Displaying 1/${totalEpisodes} episodes`;

      //APPEND ELEMENTS TO PARENT NODES
      mainDiv.appendChild(displayCardDiv);
      displayCardDiv.appendChild(title);
      displayCardDiv.appendChild(cardImage);
      displayCardDiv.appendChild(cardSummary);
    }

  }).catch(err => {
    console.log('Error!!!!');
    console.error(err);
  });
}
