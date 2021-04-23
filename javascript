<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../html/CSS/bootstrap.css">
</head>
<body>
    <main class="w-sm-25 mx-auto text-center card card-body shadow-sm">
        <h3>ALARM</h3>
        <section class="d-flex justify-content-center">
            <div style="font-size: 60px;" class="bg-secondary m-1 p-3" id="hour_display">00</div>
            <span class="my-auto" style="font-size: 50px;">:</span>
            <div style="font-size: 60px;" class="bg-secondary m-1 p-3" id="minute_display">00</div>
            <span class="my-auto" style="font-size: 50px;">:</span>
            <div style="font-size: 60px;" class="bg-secondary m-1 p-3" id="seconds_display">00</div>
            <div class="bg-secondary m-1 p-3" id="am_pm">PM</div>
        </section>

        <h2 id="date"></h2>

        <section>
            <p><b>SET ALARM</b></p>
            <div class="border mx-auto p-3" style="width: fit-content;">
                <label for="Hr">Hr</label>
                <select name="hour" id="_hr"></select>
                <span>:</span>
                <label for="Min">Min</label>
                <select name="minutes" id="_min"></select><br>
                <button id="btn_alarm" class="btn btn-success"><b>SET ALARM</b></button>
                <audio src="alarm.mp3" id="music"></audio>
            </div>
        </section>
    </main>
</body>



<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</html>

<script>
    var myHr = document.getElementById('hour_display').innerHTML;
    var myMin = document.getElementById('minute_display').innerHTML;
    var interval_function = setInterval(interval, 1000)
function interval(){
    var time = new Date()
    if(time.getHours() >= 12){
        document.getElementById('am_pm').innerHTML = 'PM'
        document.getElementById('hour_display').innerHTML = time.getHours() -12
    }else{
        document.getElementById('am_pm').innerHTML = 'AM'
        document.getElementById('hour_display').innerHTML = time.getHours()
    }
    document.getElementById('minute_display').innerHTML = time.getMinutes()
    document.getElementById('seconds_display').innerHTML = time.getSeconds()
}

function disp_Date(){
    var showDate = new Date();
    var month, day, datte, yyear;
    var month_array = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var days_array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    month = month_array[showDate.getMonth()]
    day = days_array[showDate.getDay()]
    datte = showDate.getDate()
    yyear = showDate.getFullYear()
    document.getElementById('date').innerHTML += day+', '+month+' '+datte+', '+yyear
}
disp_Date()

function hour_option(){
    for (let index = 0; index <= 12; index++) {
        document.getElementById('_hr').innerHTML += `<option value = "${index}" id = "hr_opt">${index}</option>`       
    }
}
hour_option()
function minutes_option(){
    for (let index = 0; index <= 60; index++) {
        document.getElementById('_min').innerHTML += `<option value = "${index}" id = "min_opt">${index}</option>`
    }
}
minutes_option()
document.getElementById('_hr').addEventListener('change', hawa)
document.getElementById(_'min').addEventListener('change', minit)
var save_hr;
var save_min;
var timmee;
function hawa(){
    save_hr = document.getElementById('hr_opt').value
}
function minit(){
    save_min = document.getElementById('min_opt').value
}

function set_alarm(){
    console.log('alarm set')
    call() 
}
btn_alarm.addEventListener('click', set_alarm)
function call(){
    timmee = setInterval(sound, 1000)
}
function sound(){
    if(hour_display.innerHTML == _hr.value && minute_display.innerHTML == _min.value){
        console.log('alarm set')
        document.getElementById('music').play()
       // alert('alarm set')
        console.log(hr_opt)
        console.log(min_opt)
    }
}
     

</script>