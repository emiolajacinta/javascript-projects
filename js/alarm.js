
  function dispTime(){
    var time = new Date()
    var hourMinute = time.toLocaleTimeString()
    document.getElementById('time').innerHTML= hourMinute
    setTimeout(dispTime,1000)
    }
   dispTime()

   document.getElementById('btns').addEventListener('click',() => {var time = new Date();
    var  hourMinute = time.toLocaleTimeString();
    if (hour.value == time.getHours() && min.value == time.getMinutes()) {
        document.getElementById('sec').innerHTML =`<h3>${rem.value}</h3>`;
        rt.innerHTML=hourMinute
        var aud = new Audio('../alarm2.mp3').play()
       }
       else {
       setTimeout(()=>{},1000)
       }})

   function getAlarm(){
  
   }


   $(document).ready(function(){
     let {log}=console;

     $('#btnn').click(function(){
      let val1 = $('#input1').val()
      $('#rt').html(val1)
  //     $('#rt').css({color:'blue'})
      $('#rt').addClass('text-success bg-light')
      log(val1)
     })

     
  
  })





















  
//     let text = document.getElementById('input1');
//     let tex = text.value
//     let disp = document.getElementById('rt')
//     var wod = 5
//  input1.addEventListener('keydown',deduce)

//    function deduce(){
//     rt.innerHTML = wod;

//     if(wod == 0){
//       rt.innerHTML=rt.innerHTML.substr(0,rt.innerHTML-1)
//       text.value = text.value.substr(0,4)
//       return
//     }
//     wod--;
//   }
// deduce()
//  input1.addEventListener('keyup',operate)
//  function operate(){
//  let reg = /^[a-zA-Z]{5,15}[@]{1}[a-z]{5}[.]{1}[a-z]{3}$/
//  let text = input1.value;
//  let b = reg.test(text)
//  if(reg.test(text)){
//   rt.innerHTML ='Correct mail'
//  }
//  else{
//    rt.innerHTML='Incorrect';
//  }
 
//  console.log(b)
//  }
//    import people from "./module.js";
  //  console.log(people);








 
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


