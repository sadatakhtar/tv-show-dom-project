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
//FUNCTION TO CONVERT FIRST LETTER TO CAPS
function changeFirstCharUpper(word){
    let splitWord = word.split('');
    let firstLetter = splitWord[0].toUpperCase();
    splitWord[0] = firstLetter;

    for(let i=1; i< splitWord.length; i++){
        if(splitWord[i] === ' '){
            let nextWord = splitWord[i+1].toUpperCase();
            splitWord[i+1] = nextWord;
        }
    }
    return splitWord.join('');
}

//USED IN HTML ONKEYUP
function searchEpisodes(){
     let inputValue = searchBar.value;
     let capWord = changeFirstCharUpper(inputValue);

    console.log(capWord);

    for(let i=0; i , allEpisodes.length; i++){
    if(capWord === allEpisodes[i].name || capWord === allEpisodes[i].summary){
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