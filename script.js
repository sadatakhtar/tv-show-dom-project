//SELECTORS
const allEpisodes = getAllEpisodes();
let cardEl = document.querySelector('.card');
let searchBar = document.getElementById('searchBar');
let showAllBtn = document.getElementById('showAllBtn');
let clearBtn = document.getElementById('clearBtn');


function displayAll(){
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
clearBtn.onclick = () =>{
    location.reload();
  
}

//USED IN HTML ONKEYUP
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