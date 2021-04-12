var Questions = [{
    question:'Amoeba false feet is called ?',
    options:['flagellum','pseudopodia','cilia','flappyfeet'],
    answer:'pseudopodia',
    chosen_ans : '',
},
{
    question:'which of the following is a fungi',
    options:['rat','hydra','mucor','flatworm'],
    answer:'mucor',
    chosen_ans : '',
},
{
    question:'which of the following association does one benefits while the other is neither harmed nor benefits',
    options:['commensalism','parasitism','mutualism','symbiosis'],
    answer:'commensalism',
    chosen_ans : '',
},
{
    question:'The following are reptiles except?',
    options:['snake','salamanda','Lizard','Toad'],
    answer:'Toad',
    chosen_ans : '',
},
{
    question:'who is the father of cell',
    options:['scheilawan stavan','Roberthook','maryann stevanus','michelle de jones'],
    answer:'Roberthook',
    chosen_ans : '',
},
{
    question:'Toad falls under which of the following category',
    options:['Pisces','amphibians','Reptiles','mammals','aves'],
    answer:'amphibians',
    chosen_ans : '',
}

];
    var index = 0;
    var ch;
    var counter=[0,7,4,1,2,3,4,5,6,7,8,9];
    var init = 20;
    

    function show(){
        if(!Questions[index]){
            alert('limit reached')
            return
        }
        quest2.innerHTML =`<h2>${index+1}. ${''} ${Questions[index].question}</h2>`;
        Questions[index].options.forEach(function(opt){
        quest2.innerHTML+=`<h4><input type=radio value=${opt}>${opt}</h4>`;
        })

        ch = document.querySelectorAll('input[type=radio]');
        ch.forEach(function(params){
        params.addEventListener('click', check)
        if(params.value == Questions[index].chosen_ans){
            params.checked = true;
        }
    })
    }
     function next(){
       index++
       show()
       console.log(show());
       
     }
     function previous(){
         index--
         show()

     }
     function check(rad){
         ch.forEach(function(radi){
             radi.checked = false;
         })
      rad.target.checked=true;
      Questions[index].chosen_ans=rad.target.value
     }
     function submit(){
        //  Questions.forEach(function(ques){
        //      if(ques.answer == ques.chosen_ans){
        //          score++
        //      }
        //  })


    //     var score=0;
    //     for(let index= 0; index<Questions.length; index++){
    //          if(Questions[index].chosen_ans==Questions[index].answer){
    //           score++; 
    //          } 
    //     }
    //    myh2.innerHTML= 'Your score is' + " " +  score + '/' + Questions.length }
   
         var score = Questions.filter(ques=>ques.answer==ques.chosen_ans)
         myh2.innerHTML=score.length + '/' + Questions.length
     }
      function times(){
          if(init>=0){
              console.log(init);
              init--;
              setTimeout(times,1000)
          }
        }
        times(
        show() 
    //  function times(){
    //      if(counter[init]){
    //         console.log(counter[init]);
    //         counter[init]
    //          init++;
    //          setTimeout(times,1000)
    //      }
    //      times()
    //  }
     
        )
 