$(function () {
    let arr = []
    let index = 1;
    let qtyVal = 0;
    let priceVal = 0;
    let rowSum = 0;
    let grandTotal = 0;
    let funcCalc = () => {
        $('body').on('keyup', (e) => {
            if (e.target.classList.contains('qty')) {
                qtyVal = e.target.value

                console.log('quantity =', qtyVal);
            } else if (e.target.classList.contains('price')) {
                priceVal = e.target.value
                console.log('price =', priceVal);
                rowSum = qtyVal * priceVal
            //    setTimeout(() => {
                $(e.target).parent().next().children().val(rowSum)

                let total = Number($('#_grandT').val()) + Number(rowSum)


                // if (grandTotal == 0) {
                    console.log(total,'grandtotgal ');
                    $('#_grandT').val(`${ total}`);
                    // grandTotal = rowSum;
                // }
                // else {
                //     $('#_grandT').val(grandTotal + `${rowSum}`)
                // }
            //    }, 1000);
                // e.target.parentElement.nextElementSibling.firstElementChild.value=rowSum
                //    
            }
        })
    }
    $('#btn1').click(function () {
        let disp = `<tr>
            <td>${index}</td>   
            <td><input class="form-control" type='text' id='_item${index}'></td>
            <td><input class="form-control qty" type='number' id='_quantity${index}'></td>
            <td><input class="form-control price" type='number' id='_price${index}'></td>
            <td><input class="form-control" type='number' id='_amount${index}'></td>
            <td><button class="btn btn-warning btn-block text-white font-weight-bold" id='_amount'>Edit</button></td>
            </tr>`
            console.log($(`_item${index-1}`).val(), index-1);
        if ($(`_item${index-1}`).val() !=undefined ) {
            console.log('not empty');
        }
        $('#_tbody').append(disp)
        console.log(index)
        index++
        funcCalc();
    })
    $('#btn2').on('click', () => {
        if (index > 1) {
            // $('#btn2').attr('disabled',true)
            $('#_tbody tr:last').remove();
            index--;
        }
        //   document.getElementById('_tbody').lastElementChild.remove();

    })

    //    $(`_amount${index}`)


    // let calc = ()=>{
    //     console.log($());
    // }
    // $('#_tbody input').on('click',(e)=>{
    //     console.log(e.target);
    //     // alert()
    // });
    // })
})
// var num=[1,2,3,4,5,6,7,8,9]
// var localset = localStorage.setItem('name', JSON.stringify(num));
// var localget = localStorage.getItem('name')
// var nums = JSON.parse(localget);
// console.log(nums)


  //PROMISE , FETCH AND IP ADDRESS LIKE SENDING AND RECEIVING A DATA
// function fetch_me(){
    // var foundTrue=[{}];
    // var foundFalse=[{}];
//     let kosi = {
//         name:'kosisochukwu',status:true,score:200
//     }
//     fetch('https://jsonplaceholder.typicode.com/todos',{
//         method:'GET'
//     }).then(res =>{
//         return res.json()
//     }).then(function(data){
        // data.forEach(element => {
        //     if(element.completed==true){
        //         foundTrue.push(element)
        //     }
        //     else if(element.completed==false){
        //         foundFalse.push(element)
        //     }

        // });
        // console.log(foundTrue);
        // console.log(foundFalse);
//     })
// }
