document.addEventListener("DOMContentLoaded", function (){
    setInterval(updateClock, 1000);
    function updateClock(){
        const now = new Date();
        const dname = now.getDay(),
            mo = now.getMonth(),
            dnum = now.getDate(),
            yr = now.getFullYear(),
            hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Sunday"];
        const ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        const values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
        for(let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        // window.setInterval("updateClock()", 1);
    }

        updateClock();
    
})