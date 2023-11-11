const bells = new Audio('./sounds/bell.wav'); // assign path of the bell sound as a parameter
const startBtn = document.querySelector('.btn-start'); // class selectors to update elements on the web page
const session = document.querySelector('.minutes'); 
const pauseBtn = document.querySelector('.btn-pause')

let myInterval; // instantiate myInterval
let state = true; // defines when the application is running

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state) {
      state = false;
      let totalSeconds = sessionAmount * 60;
  
      const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');
  
        totalSeconds--;
  
        let minutesLeft = Math.floor(totalSeconds/60);
        window.minutesLeft = minutesLeft
        let secondsLeft = totalSeconds % 60;
  
        if(secondsLeft < 10) {
          secondDiv.textContent = '0' + secondsLeft;
        } else {
          secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`
  
        if(minutesLeft === 0 && secondsLeft === 0) {
          bells.play()
          clearInterval(myInterval);
        }
      }
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert('Session has already started.')
    }
}
startBtn.addEventListener('click', appTimer);

// reset and variation buttons code block
const mins = document.querySelector(".minutes");
const sec = document.querySelector('.seconds');
let variation = false


function twfive() {
    clearInterval(myInterval)
    mins.textContent = 25
    sec.textContent = "00"
    state = true
    variation = false
}
function fifty() {
    clearInterval(myInterval)
    mins.textContent = 50
    sec.textContent = "00"
    state = true
    variation = true
}

var slider = document.getElementById("minute-slider").oninput = function setNumber() {
    clearInterval(myInterval)
    var value = (this.value-this.min)

    mins.textContent = value
    sec.textContent = "00"

}

function reset() {
    if(variation) {
        variation = true
        clearInterval(myInterval)
        mins.textContent = 50
        sec.textContent = "00"
        state = true
        variation = false
    } else {
        clearInterval(myInterval)
        mins.textContent = 25
        sec.textContent = "00"
        state = true
    }
}


function pause() {
    clearInterval(myInterval);
    window.minutesLeft++;
    state = true;
}

function sliderHide() {
  var slider = document.getElementById("slider");
  if (slider.style.visibility === "hidden") {
    slider.style.visibility = "visible";
  } else {
    slider.style.visibility = "hidden";
  }
}
