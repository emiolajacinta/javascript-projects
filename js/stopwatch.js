btn1.addEventListener('click',start)

function start(){
var val1 = input1.value;
var val2 = input2.value;
var counter = setInterval(calculate,10);

function calculate() {
  val1--;
  demo.innerHTML=val1
   if(val1 == val2){
      clearInterval(counter)
      demo2.innerHTML="Time's up stop joor"
  }
  else if ( val1 == '' && val2 == ''){
      clearInterval(counter)
      demo.innerHTML='"Pls input a number"'
  }
  else if(val1 < val2){
      clearInterval(counter)
      demo.innerHTML= 'Invalid input'
  }
   else  if(val1 < 0 || val2 < 0){
       clearInterval(counter)
       demo.innerHTML="Negative numbers are not allowed"
   }
//    else if(val1<0 && val2<0){
//        clearInterval(interval)
//        demo.innerHTML='Negative numbers are not allowed'
//    }
}
btn2.addEventListener('click',stop)
function stop(){
 clearInterval(interval)
    
}

}
// var num=[1,2,3,4,5,6,7,8,9]
// var localset = localStorage.setItem('name', JSON.stringify(num));
// var localget = localStorage.getItem('name')
// var nums = JSON.parse(localget);
// console.log(nums)