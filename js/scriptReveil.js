document.addEventListener("DOMContentLoaded", function (){
    const audio = new Audio('audio/Musique dentrée - Olympique De Marseille.mp3');
    audio.loop = true;
    let inputdate = document.querySelector('#alarmTime');
    let setAlarmButton = document.querySelector('.set-alarm');
    let clearAlarmButton = document.querySelector('.clear-alarm');
    let clearAllButton = document.querySelector('.clear-all');
    let alarmTime = null;
    let alarmTimout = null;
    let numberList = 0;

    setInterval(updateClock, 1000);
    function updateClock(){
        let now = new Date();
        let dname = now.getDay(),
            mo = now.getMonth(),
            dnum = now.getDate(),
            yr = now.getFullYear(),
            hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Sunday"];
        let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
        for(let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        setAlarmTime(inputdate);
    }

    function setAlarmTime(inputdate){
        alarmTime = inputdate.value;
        let alarmTable = [];
        alarmTable.push(alarmTime);
        console.log(alarmTable);
    }

    function setAlarm(){
        if(alarmTime){
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);

            if(timeToAlarm > current){
                let timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimout = setTimeout(() => audio.play(), timeout);
                alert('alarm set');
                alarmListItem();
            }
        }
    }
    // console.log(alarmTime);

    function clearAlarm(){
        audio.pause();
        if(alarmTimout){
            clearTimeout(alarmTimout);
            alert('alarm cleared');
        }
    }

    function alarmListItem(){
        let alarmList = document.querySelector('#alarm-list')
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let number = document.createElement('span');
        let alarmItem = document.createElement("span");
        let buttonClearAlarm = document.createElement("button");
        // buttonClearAlarm.setAttribute("class", "supprime-alarm");
        buttonClearAlarm.textContent = 'Clear';
        buttonClearAlarm.style.height = "20px";
        buttonClearAlarm.style.width = "50px";
        number.innerText = `${++numberList}`;
        alarmItem.innerHTML = `${alarmTime}`;

        li.append(number, alarmItem, buttonClearAlarm);
        ul.append(li);
        alarmList.append(ul);

        buttonClearAlarm.addEventListener("click", function(e) {
            li.remove();
            clearAlarm();
        });
    }
    setAlarmButton.addEventListener('click', setAlarm);
    // clearAlarmButton.addEventListener('click', clearAlarm);
    // clearAllButton.addEventListener('click', clearAll);
    updateClock();
})