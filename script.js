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
let searchBar = document.getElementById('searchBar');
let showAllBtn = document.getElementById('showAllBtn');


//let titleEl = document.getElementById('title');
//titleEl.textContent = `${allEpisodes[0].name} S0${allEpisodes[0].season}E0${allEpisodes[0].number}`;
        // for(let i=0;i< allEpisodes.length; i++){
        //     let newTitleTag = document.createElement('h3');
        //     newTitleTag.textContent = `${allEpisodes[i].name} S0${allEpisodes[i].season}E0${allEpisodes[i].number}`;
        //     cardEl.appendChild(newTitleTag);

        //     let imgTag = document.createElement('img');
        //     imgTag.src = `${allEpisodes[i].image.medium}`;
        //     cardEl.appendChild(imgTag);

        //     let pTag = document.createElement('p');
        //     pTag.textContent = `${allEpisodes[i].summary}`;
        //     cardEl.appendChild(pTag);
        // }
//EVENT LISTENERS
showAllBtn.onclick = () => {
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
    
}
//RESET THE PAGE



 function searchEpisodes(){
     let inputValue = searchBar.value;
    console.log(inputValue);

    for(let i=0; i , allEpisodes.length; i++){
    if(inputValue === allEpisodes[i].name || inputValue === allEpisodes[i].summary){
        console.log('yipeee');

        let newTitleTag = document.createElement('h3');
        newTitleTag.textContent = `${allEpisodes[i].name} S0${allEpisodes[i].season}E0${allEpisodes[i].number}`;
        cardEl.appendChild(newTitleTag);

        let imgTag = document.createElement('img');
        imgTag.src = `${allEpisodes[i].image.medium}`;
        cardEl.appendChild(imgTag);

        let pTag = document.createElement('p');
        pTag.textContent = `${allEpisodes[i].summary}`;
        cardEl.appendChild(pTag);

    }else {
        console.log('next time');
        //location.reload();
       
    }



    }

};