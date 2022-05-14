document.addEventListener("DOMContentLoaded", function (){

    // selection de button
    const playButton = document.getElementsByClassName("play")[0];
    const lapButton = document.getElementsByClassName("lap")[0];
    const resetButton = document.getElementsByClassName("reset")[0];
    const clearButton = document.getElementsByClassName("lap-clear-button")[0];
    const minute = document.getElementsByClassName("minute")[0];
    const second = document.getElementsByClassName("sec")[0];
    const centiSecond = document.getElementsByClassName("msec")[0];
    const laps = document.getElementsByClassName("laps")[0];
    const bg = document.getElementsByClassName("outer-circle")[0];

    let isPlay = false;
    let isReset = false;
    let min;
    let sec;
    let centiSec;
    let secCounter = 0;
    let centiCounter = 0;
    let minCounter = 0;
    let lapItem = 0;
    const toggleButton = () => {
        lapButton.classList.remove("hidden");
        resetButton.classList.remove("hidden");
        playButton.classList.remove("hidden");
    }

    const play = () => {
        if(!isPlay && !isReset){
            playButton.innerHTML = 'Pause';
            bg.classList.add("animation-bg");
            min =  setInterval(() => {
                    minute.innerHTML = `${++minCounter} :`;
                }, 60*1000);
            sec =  setInterval(() => {
                if (secCounter === 60){
                    secCounter = 0;
                }
                    second.innerHTML = `&nbsp;${++secCounter} : `;
                }, 1000);
            centiSec =  setInterval(() => {
                if(centiCounter === 100){
                    centiCounter = 0;
                }
                centiSecond.innerHTML = `&nbsp;${++centiCounter}`;
            }, 10);
                    isPlay = true;
                    isReset = false;
        } else{
            playButton.innerHTML = 'Play';
            clearInterval(min);
            clearInterval(sec);
            clearInterval(centiSec);
            isPlay = false;
            isReset = false;
            bg.classList.remove("animation-bg");
        }
        toggleButton();
    }

    const reset = () => {
        isReset = true;
        play();
        // lapItem
        lapButton.classList.add("hidden");
        resetButton.classList.add("hidden");
        second.innerHTML = '0 :';
        centiSecond.innerHTML = '0';
        minute.innerHTML = '0 :';
    }

    const lap = () => {
        const li = document.createElement("li");
        const number = document.createElement("span");
        const timeStamp = document.createElement("span");

        li.setAttribute("class", "lap-item");
        number.setAttribute("class", "number")
        timeStamp.setAttribute("class", "time-stamp");

        number.innerText = `#${++lapItem}`
        timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

        li.append(number, timeStamp);
        laps.append(li);

        clearButton.classList.remove("hidden");
    }

    const clearAll = () => {
        laps.innerHTML = '';
        laps.append(clearButton);
        clearButton.classList.add("hidden");
        lapItem = 0;
    }

    playButton.addEventListener("click", play);
    resetButton.addEventListener("click", reset);
    lapButton.addEventListener("click", lap);
    clearButton.addEventListener("click", clearAll);
})