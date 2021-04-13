var text=input1.value;
var myarray=['kosi'];
console.log(myarray)
text2=toString(myarray.push(text))
btn1.addEventListener('click',addd)


function addd(){
    console.log(myarray)
    var text2 = toString(myarray.push(text));
    console.log(text2)
}
var localse = localStorage.setItem('Table',JSON.stringify(text2));
var localge = localStorage.getItem('Table');
JSON.parse(localge)
console.log(table)
