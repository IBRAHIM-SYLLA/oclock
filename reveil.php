<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reveil.css">
    <script src="js/scriptReveil.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <div class="datetime">
            <div class="date">
                <span id="dayname">Jour</span>,
                <span id="month">Mois</span>
                <span id="daynum">00</span>,
                <span id="year">Année</span>
            </div>
            <div class="time">
                <span id="hour">00</span>:
                <span id="minutes">00</span>:
                <span id="seconds">00</span>
                <span id="period">AM</span>
            </div>
                <input type="datetime-local" name="alarmTime" id="alarmTime">
                <div class="controls">
                    <button class="set-alarm">Set alarm</button>
                    <!-- <button class="clear-alarm">Clear alarm</button> -->
                    <!-- <button class="clear-all">Clear All</button> -->
                </div>
        </div>
        <div id="alarm-list"></div>
    </main>
</body>
</html>