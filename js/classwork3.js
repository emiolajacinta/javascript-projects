var list=[{
    name:'Kosi',
    phone: 09013751524,
    age:10
},
{
    name:'Ifeoma',
    phone: 08149769777,
    age:13

},
{
    name:'Mercy',
    phone: 08066810593,
    age:10

},
{
    name:'Ebere',
    phone: 08067470519,
    age:16

},
{
    name:'Ifeyinwa',
    phone: 08129493154,
    age:12

},
{
    name:'Nkechi',
    phone: 08035299172,
    age:10

}]
  t_data = document.getElementsByClassName ('names');
  t_names = list.map(function (human){
      console.log(t_data)
      return human.name;
  })
   for ( let index = 0 ; index < t_data.length; index++){
       t_data[index].innerHTML= t_names[index]
   }
   s_data = document.getElementsByClassName('phones')
   s_names = list.map(function (human){
       return human.phone;
   })
   for ( let index = 0 ; index < s_data.length; index++){
    s_data[index].innerHTML= s_names[index]
} 
   r_data = document.getElementsByClassName('ages')
   r_names = list.map(function (human){
       return human.age;
   })
   for ( let index = 0 ; index < s_data.length; index++){
    r_data[index].innerHTML= r_names[index]
} 
    for ( let index =0; index < r_names.length; index ++ ){
        if(r_names[index] > 10){
            t_data[index].classList.add('table-success');
            s_data[index].classList.add('table-success');
            r_data[index].classList.add('table-success');
        }
        else if (r_names[index] <= 10 ){
            t_data[index].classList.add('table-danger');
            s_data[index].classList.add('table-danger');
            r_data[index].classList.add('table-danger');
        }
    }
  var class_1 = document.getElementsByClassName('names')
  var class_2 = document.getElementsByClassName('phones')
  var class_3 = document.getElementsByClassName('ages')