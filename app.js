document.addEventListener('DOMContentLoaded', () => {

  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
  const startButton = document.querySelector('.btn__reset');
  const lifes = document.getElementById('scoreboard');
  const tries = document.getElementsByClassName('tries');
  let missed = 0;

  var phrases = ["January",
    "Februrary",
    "April",
    "November",
    "August",
    "October",
    "December"
  ];

  // Eventlistener which fades and sets display to none of the overlay
  startButton.addEventListener('click', () => {
    const overley = document.getElementById('overlay');
    setTimeout(function() {
      overlay.style.display = 'none'
    }, 1000);
    overlay.classList.add('fade');
  });

  // function which takes the array and selects a random item of the array

  function getRandomPhraseAsArray(arr) {
    let i = Math.floor(Math.random() * phrases.length)
    console.log(phrases[i]);
    return phrases[i].split("");
  };

  // function which adds phrase to display

  function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
      const listItem = document.createElement('LI');
      listItem.textContent = arr[i];
      if (listItem.textContent != " ") {
        listItem.classList = "letter";
      }
      else {
        listItem.classList = "space";
      }
      phrase.appendChild(listItem)
    }
  }

  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray)




  function checkLetter(target) {
    const letter = document.querySelectorAll('.letter');
    const clickedLetter = target.textContent;
    let letterFound = null;

    for (let i = 0; i < letter.length; i++) {
      if (letter[i].textContent.toLocaleLowerCase() === clickedLetter) {
        letter[i].classList.add("show");
        letterFound = letter[i].textContent;
      }
    }
    return letterFound;
  }

// THIS IS A ALTERNATIV SOLUTION WHICH I TRIED BUT IT DID NOT WORK
// I WOULD LIKE TO KNOW WHY EXACTLY?
  function checkLetterAlternativ(target) {
    const letter = document.querySelectorAll('.letter');
    const clickedLetter = target.textContent;

    for (let i = 0; i < letter.length; i++) {
      if (letter[i].textContent.toLocaleLowerCase() === clickedLetter) {
        letter[i].classList.add("show");
       const  letterFound = letter[i].textContent;
       return letterFound;
     } else {
       return null;
     }
    }
  }
  // THIS IS A ALTERNATIV SOLUTION WHICH I TRIED BUT IT DID NOT WORK
  // I WOULD LIKE TO KNOW WHY EXACTLY?

function removeLife () {
  if (checkLetter(selectedButton) === null) {
    lifes.firstElementChild.removeChild(tries[0]);
    missed++;
  }
}


  // Eventlistener for each clicked Button

  qwerty.addEventListener('click', (e) => {
    const selectedButton = e.target;
    if (selectedButton.tagName === "BUTTON") {
      selectedButton.classList = 'chosen';
      selectedButton.setAttribute("disabled", "");
    }
    checkLetter(selectedButton);

    // removing the lifes
    if (checkLetter(selectedButton) === null) {
      lifes.firstElementChild.removeChild(tries[0]);
      missed++;
    }

  });

  // Document loded even listener end
});
