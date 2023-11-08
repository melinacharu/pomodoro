const bells = new Audio('./sounds/bell.wav'); // assign path of the bell sound as a parameter
const startBtn = document.querySelector('.btn-start'); // class selectors to update elements on the web page
const session = document.querySelector('.minutes'); 
let myInterval; // instantiate myInterval
let state = true; // defines when the application is running
startBtn.addEventListener('click', appTimer);

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
    if(state) {
      state = false;
      let totalSeconds = sessionAmount * 60;
      startBtn.addEventListener('click', appTimer);
  
      const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');
        
        totalSeconds--;
        
        let minutesLeft = Math.floor(totalSeconds/60);
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



