<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/minuteur.css">
    <script src="js/scriptMinuteur.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
</head>
<body>
    <header>

    </header>
    <main>
        <section id="minuteurs">
            <h2>La Minuteries su siècle</h2>
            <!-- data-time = ISO-8601 car facilement compréhensible par méthode parse du navigateurs -->
            <div class="numbers" id="countdown" data-time = "2022-05-22T20:12:42+0000">
                <div class="bloc">
                    <strong id="days"></strong>
                    <em>Jours</em>
                </div>
                <div class="bloc">
                    <strong id="hours"></strong>
                    <em>Heures</em>
                </div>
                <div class="bloc">
                    <strong id="minutes"></strong>
                    <em>Minutes</em>
                </div>
                <div class="bloc">
                    <strong id="seconds"></strong>
                    <em>Secondes</em>
                </div>
            </div>
            <button id="stop"><i class="fa-solid fa-pause"></i></button>
        </section>
    </main>
    <?php require_once 'footer.php'; ?>
</body>
</html>