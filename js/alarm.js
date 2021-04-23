
// var myHr = document.getElementById('hour_display').innerHTML;
// var myMin = document.getElementById('minute_display').innerHTML;
// var interval_function = setInterval(interval, 1000)
// function interval(){
// var time = new Date()
// if(time.getHours() >= 12){
//     document.getElementById('am_pm').innerHTML = 'PM'
//     document.getElementById('hour_display').innerHTML = time.getHours() -12
// }else{
//     document.getElementById('am_pm').innerHTML = 'AM'
//     document.getElementById('hour_display').innerHTML = time.getHours()
// }
// document.getElementById('minute_display').innerHTML = time.getMinutes()
// document.getElementById('seconds_display').innerHTML = time.getSeconds()
// }

// function disp_Date(){
// var showDate = new Date();
// var month, day, datte, yyear;
// var month_array = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var days_array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// month = month_array[showDate.getMonth()]
// day = days_array[showDate.getDay()]
// datte = showDate.getDate()
// yyear = showDate.getFullYear()
// document.getElementById('date').innerHTML += day+', '+month+' '+datte+', '+yyear
// }
// disp_Date()

// function hour_option(){
// for (let index = 0; index <= 12; index++) {
//     document.getElementById('hr').innerHTML += `<option value = "${index}" id = "hr_opt">${index}</option>`       
// }
// }
// hour_option()
// function minutes_option(){
// for (let index = 0; index <= 60; index++) {
//     document.getElementById('min').innerHTML += `<option value = "${index}" id = "min_opt">${index}</option>`
// }
// }
// minutes_option()
// document.getElementById('hr').addEventListener('change', hawa)
// document.getElementById('min').addEventListener('change', minit)
// var save_hr;
// var save_min;
// var timmee;
// function hawa(){
// save_hr = document.getElementById('hr_opt').value
// }
// function minit(){
// save_min = document.getElementById('min_opt').value
// }

// function set_alarm(){
// console.log('alarm set')
// call() 
// }
// btn_alarm.addEventListener('click', set_alarm)
// function call(){
// timmee = setInterval(sound, 1000)
// }
// function sound(){
// if(hour_display.innerHTML == hr.value && minute_display.innerHTML == min.value){
//     console.log('alarm set')
//     document.getElementById('alarm').play()
//    // alert('alarm set')
//     console.log(hr_opt)
//     console.log(min_opt)
// }
// }
 
// // math.floor- it prints or converts decimal to whole number. i.e it console logs the exact number b4 d whole number.
// // math.ceil(4.2)- it returns 4 not minding if it can be rounded, opposite of math.floor
// // math.sqrt(36)// it returns 6
// // math.round(4.5) - it rounds number to the nearest whole number or integer
// // math.random()*10
// // math.min(1, 2,4,56,6)- it is used to get the minimum or smallest number among numbers
// // math.pow(6,2)// it returns 36
// //Math.abs(-4.7)// it returns 4.7


// // how to create Object

// function Human(name,age,gender='male'){
// this.name=name;
// this.age=age;
// this.gender=gender;

// this.getName = Function(){
//     return this.name;
// }
// this.hasBreast = Function(){
//     return this.gender=='Female';
// }

// }
// var eve = new Human('Eve',20,'Female')
// eve.getName
// var b = eve.hasBreast
// console.log(b)

import people from './module.js';

console.log(people);
