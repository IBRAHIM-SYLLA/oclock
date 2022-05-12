document.addEventListener("DOMContentLoaded", function (){
    // contient le nombre de secondes
    const MINUTES = 60;
    // nombre de minutes
    const HOURS = 60 * MINUTES;
    // nombre d'heure
    const DAYS = 24 * HOURS;

    // calculer la différence en seconde entre les 2 dates
    // on selectionne les élements
    const countdown = document.querySelector('#countdown');
    // dataset permet de récuperer les différentes propriétés de la balise
    // pour avoir une date au format timestamp on utilise Parse qu'on divise par 1000 pour la valeur en secondes
    const launchDate = Date.parse(countdown.dataset.time) / 1000;
    // on compare avec l'heure actuelle du navigateur
    const difference = launchDate - Date.now() / 1000;
    // On cree un objet qui contient les heures, minutes, seconds
    const diff = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor(difference % DAYS / HOURS),
        minutes: Math.floor(difference % HOURS / MINUTES),
        seconds: Math.floor(difference % MINUTES)
    }
    // on inject les valeurs de l'objet dans l'HTML element
    document.getElementById('days').innerText = diff.days;
    document.getElementById('hours').innerText = diff.hours;
    document.getElementById('minutes').innerText = diff.minutes;
    document.getElementById('seconds').innerText = diff.seconds;
    console.log(diff);
    // On va envoyer cet objet a une fonction qui mettra à jour l'HTML
})