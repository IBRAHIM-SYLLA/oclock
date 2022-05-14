document.addEventListener("DOMContentLoaded", function (){
    // contient le nombre de secondes
    const MINUTES = 60;
    // nombre de minutes
    const HOURS = 60 * MINUTES;
    // nombre d'heure
    const DAYS = 24 * HOURS;
    const elements = {
        days:  document.getElementById('days'),
        hours:  document.getElementById('hours'),
        minutes:  document.getElementById('minutes'),
        seconds:  document.getElementById('seconds')
    }
    // on cree un objet vide pour sauvgarder la valeur précédente de l'élements
    let previousDiff = {};
    // on selectionne les élements
    const countdown = document.querySelector('#countdown');
    // dataset permet de récuperer les différentes propriétés de la balise
    // pour avoir une date au format timestamp on utilise Parse qu'on divise par 1000 pour la valeur en secondes
    const launchDate = Date.parse(countdown.dataset.time) / 1000;

    function refreshCountdown(){
        // calculer la différence en seconde entre les 2 dates
        // on compare avec l'heure actuelle du navigateur
        const difference = launchDate - Date.now() / 1000;
        // On cree un objet qui contient les heures, minutes, seconds
        // if (difference <= 0){
            // cette condition que si on veut relancer l'évênement a la fin du decompte
            // document.location.reload();
            // return
        // }
        const diff = {
            days: Math.floor(difference / DAYS),
            hours: Math.floor(difference % DAYS / HOURS),
            minutes: Math.floor(difference % HOURS / MINUTES),
            seconds: Math.floor(difference % MINUTES)
        }
        updateDom(diff);
        // requestAnimationFrame permet de mettre en pause si l'user n'est pas sur l'onglet
        window.setTimeout(() =>{
            window.requestAnimationFrame(refreshCountdown)
        }, 1000);
        let stop = document.querySelector('#stop')

        stop.addEventListener('click', function (event){
            event.preventDefault();
            clearInterval(updateDom);
            console.log('stop');
        })
    }

    refreshCountdown();
    /**
     * Met a jour la structure HTML en fonction d'un nouvel interval
     * @param {{days: number, hours: number, minutes: number, seconds: number}} diff
     */
    // fontion qui permet de mettre a jour le DOM
    function updateDom(diff){
        // on inject les valeurs de l'objet dans l'HTML element grace a une boucle qui permet l'optimisation du code
        Object.keys(diff).forEach((key) =>{
            if (previousDiff[key] != diff[key]){
                elements[key].innerText = diff[key];
                console.log(`updating${key}`);
            }

        })
        // sauvegarde la new version
        previousDiff = diff;
    }
    // pour mettre en pause le minuteurs
})