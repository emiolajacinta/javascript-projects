
// btn1.addEventListener('click',addd)
// var myarray=[];

// function addd(){
//     title=input1.value;
//     text = {title};
//     myarray.push(text);
//     console.log
//     // tbody.innerHTML="";
//     console.log(myarray)
//     for (let index = 0; index < myarray.length; index++) {
//         tbody.innerHTML+=`<tr><td>${myarray[index]}</td><td><button class="btn btn-secondary" style="width:120px">Done</button></td><td><button class="btn btn-danger" style="width:120px">Delete</button</td></tr>`
//     }
// }
// btn3.addEventListener('click',remuve)
// function remuve(){

// }
// var localse = localStorage.setItem('Table',JSON.stringify(myarray));
// var localge = localStorage.getItem('Table');
// JSON.parse(localge)
// console.log(localge)
var myarray=[];
btn1.addEventListener('click',addd)
function addd(){
  _title=input1.value;
  text = {title:_title,done:false};
  myarray.push(text);
  console.log(myarray)
//   tb.innerHTML=''
//   disp(fr_om)
} 
 function disp(_new){
   for (let index = 0; index < myarray.length; index++) {
        if (myarray[index].done == false) {
            var statuses;
            statuses = "undone!"
            btnclass ="btn btn-secondary" 
        }
        else if(myarray[index].done == true){
            statuses ="completed!"
            btnclass='btn btn-success'
        }
       tb.innerHTML+=`<tr class = 'rows'><td>${index+1}</td>
       <td>${myarray[index].title}</td>
       <td><button onclick="done(${index})" class="${btnclass}" done_button">Done</button></td>
       <td><button onclick="del(${index})" class="btn btn-danger del_button">Delete</button></td>
       </tr>`
   }
}
//    var _finish = document.getElementsByClassName('done_button');
//    for (let index = 0; index < _finish.length; index++) {
//       _finish[index].addEventListener('click',done)  
//    }
//  }
 function done(event){

//    event.target.setAttribute('class','btn btn-success');
//    event.target.style.backgroundColor = "green";
//    event.target.innerHTML=('completed')
    if (myarray[event].done==false) {
        myarray[event].done=true;
    } else if (myarray[event].done==true){
        myarray[event].done=false;
    }
       tb.innerHTML='';
       disp()
  
 }
 function del(rem){
   myarray.splice(rem, 1);
   tb.innerHTML='';
   disp();
 }
 function save(){
     localStorage.setItem('list',JSON.stringify(myarray));
     }
     function get(){
         arr = localStorage.getItem('list') || [];
         myarray = JSON.parse(arr)
         disp()
     }
    //  get()

    //  var mydate = new Date();
    //  console.log(mydate.getDay());
     
//   var aud = document.createElement('audio');
//   aud.src = '../goal.mp3';
//   aud.play()
// aud = new Audio('../goal.mp3')
// aud.play()

 
