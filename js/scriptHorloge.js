document.addEventListener("DOMContentLoaded", function (){
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
        // window.setInterval("updateClock()", 1);
    }

    // function initClock(){
        updateClock();
    // }
    
})