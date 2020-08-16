//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

//window.onload = setup;

//SELECTORS
const allEpisodes = getAllEpisodes();
let cardEl = document.querySelector('.card');

//let titleEl = document.getElementById('title');
//titleEl.textContent = `${allEpisodes[0].name} S0${allEpisodes[0].season}E0${allEpisodes[0].number}`;
for(let i=0;i< allEpisodes.length; i++){
    let newTitleTag = document.createElement('h3');
    newTitleTag.textContent = `${allEpisodes[i].name} S0${allEpisodes[i].season}E0${allEpisodes[i].number}`;
    cardEl.appendChild(newTitleTag);

    let imgTag = document.createElement('img');
    imgTag.src = `${allEpisodes[i].image.medium}`;
    cardEl.appendChild(imgTag);

    let pTag = document.createElement('p');
    pTag.textContent = `${allEpisodes[i].summary}`;
    cardEl.appendChild(pTag);
}





