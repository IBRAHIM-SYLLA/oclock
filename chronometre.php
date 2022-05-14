<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/chronometre.css">
    <script src="js/scriptChronometre.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <section class="container">
            <div class="watch">
                <div class="outer-circle">
                    <div class="inner-circle">
                        <span class="text minute">0 :</span>
                        <span class="text sec">&nbsp; 0 :</span>
                        <span class="text msec">&nbsp; 0</span>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="button reset hidden">Reset</button>
                    <button class="button play">Play</button>
                    <button class="button lap hidden">Lap</button>
                </div>
            </div>
            <ul class="laps">
                <button class="lap-clear-button hidden">Clear All</button>
            </ul>
        </section>
    </main>
</body>
</html>