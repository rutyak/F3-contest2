let count=0;
function formatTime(value){
    return value.toString().padStart(2,"0"); // creating format hh:mm:ss
}

function creatTimer(timerId, hours, min, sec){

    const timerContainer = document.createElement('div'); //creating Div
    timerContainer.classList.add('timerInt'); // adding class name to div
    timerContainer.id = timerId; // adding id to div
    const timeLeft = document.createElement("p");
    timeLeft.textContent = "Time Left:";

    const timerValue = document.createElement("div");
    timerValue.id = `timerValue_${timerId}`;
    updateTimer(timerValue, hours, min, sec);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTimer(timerContainer, timerId);
    });

    timerContainer.appendChild(timeLeft);
    timerContainer.appendChild(timerValue);
    timerContainer.appendChild(deleteBtn);

    document.getElementById("setTimers").appendChild(timerContainer);
}

function updateTimer(timerContainer, hours, min, sec){  //Adding content inside timerContainer
    const format = `${formatTime(hours)}:${formatTime(min)}:${formatTime(sec)}`; 
    timerContainer.textContent = format;
}

function setTimer(){
    const hours = parseInt(document.getElementById("h").value);
    const min = parseInt(document.getElementById("m").value);
    const sec = parseInt(document.getElementById("s").value);

    const totalSec = hours * 3600 + min * 60 + sec;
    let remainingSec = totalSec;

    if(totalSec > 0){
        const timerId = count++;

        creatTimer(timerId, hours, min, sec); //creating timers

       let timerInterval = setInterval(()=>{
          remainingSec--;

          const h = Math.floor(remainingSec / 3600);// suppose 1200/3600 is 0.3333333333333333 by using math.floor ans is 0; 
          const m = Math.floor((remainingSec % 3600)/60); // 1200%3600 is 1200 and 1200/60 is 20min
          const s = Math.floor(remainingSec % 60); // 1200%60 is 0
        
          updateTimer(document.getElementById(timerId), h, m, s);

          if(remainingSec <= 0){ // when remainder 0 
            clearInterval(timerInterval); // then top interval
            document.getElementById(timerId).textContent = "Time's Up"; // show times up 
          }
       },1000) 
    }
}

