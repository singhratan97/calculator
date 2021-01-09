//DOM 
        
div_row1 = document.createElement('div')
div_row1.setAttribute('class','row')
div_row1_in = document.createElement('div')
div_row1_in.setAttribute('class','col-8 offset-2 headi hi')
div_row1_in.innerText = 'CALCULATOR'
div_row1.appendChild(div_row1_in)


break1 = document.createElement('br')

div_row2 = document.createElement('div')
div_row2.setAttribute('class','row')
div_row2_in = document.createElement('div')
div_row2_in.setAttribute('class','col-12 headi')
div_row2_in.innerText = 'NOTE : Please use keyboard only for numbers and use operator from the screen by clicking it'
div_row2.appendChild(div_row2_in)

div_row3 = document.createElement('div')
div_row3.setAttribute('class','row')
div_row3_in = document.createElement('div')
div_row3_in.setAttribute('class','col-12 headi')
div_row3_in.innerText = 'NOTE : Try to either add or sub or multiply or divide'
div_row3.appendChild(div_row3_in)

div_row4 = document.createElement('div')
div_row4.setAttribute('class','row')
div_row4_in = document.createElement('div')
div_row4_in.setAttribute('class','col-12 headi')
div_row4_in.innerText = 'NOTE : Please refresh (Press F5) if its abnormal'
div_row4.appendChild(div_row4_in)

break2 = document.createElement('br')

div_row5 = document.createElement('div')
div_row5.setAttribute('class','row')
input = document.createElement('input')
input.type = 'text'
input.id = 'input'
input.setAttribute('class' , 'col-8 offset-2 text-center')
input.placeholder = 'Enter number'
div_row5.appendChild(input)

div_row6 = document.createElement('div')
div_row6.setAttribute('class','row')
div_row6_in1 = document.createElement('div')
div_row6_in1.setAttribute('class','col-3 btn btn-secondary')
div_row6_in1_in = document.createElement('div')
div_row6_in1_in.setAttribute('class','in-btn')
div_row6_in1_in.setAttribute('id','add')
div_row6_in1_in.innerText = '+'
div_row6_in1.appendChild(div_row6_in1_in)

div_row6_in2 = document.createElement('div')
div_row6_in2.setAttribute('class','col-3 btn btn-danger')
div_row6_in2_in = document.createElement('div')
div_row6_in2_in.setAttribute('class','in-btn')
div_row6_in2_in.setAttribute('id','sub')
div_row6_in2_in.innerText = '-'
div_row6_in2.appendChild(div_row6_in2_in)

div_row6_in3 = document.createElement('div')
div_row6_in3.setAttribute('class','col-3 btn btn-primary')
div_row6_in3_in = document.createElement('div')
div_row6_in3_in.setAttribute('class','in-btn')
div_row6_in3_in.setAttribute('id','mul')
div_row6_in3_in.innerText = '*'
div_row6_in3.appendChild(div_row6_in3_in)

div_row6_in4 = document.createElement('div')
div_row6_in4.setAttribute('class','col-3 btn btn-warning')
div_row6_in4_in = document.createElement('div')
div_row6_in4_in.setAttribute('class','in-btn')
div_row6_in4_in.setAttribute('id','div')
div_row6_in4_in.innerText = '/'
div_row6_in4.appendChild(div_row6_in4_in)

div_row6.append(div_row6_in1,div_row6_in2,div_row6_in3,div_row6_in4)


div_row7 = document.createElement('div')
div_row7.setAttribute('class','row')
div_row7_in1 = document.createElement('div')
div_row7_in1.setAttribute('class','col-6 btn btn-warning')
div_row7_in1_in = document.createElement('div')
div_row7_in1_in.setAttribute('class','in-btn percentage')
div_row7_in1_in.setAttribute('id','mod')
div_row7_in1_in.innerText = '%'
div_row7_in1.appendChild(div_row7_in1_in)

div_row7_in2 = document.createElement('div')
div_row7_in2.setAttribute('class','col-6 btn btn-dark text-white')
div_row7_in2_in = document.createElement('div')
div_row7_in2_in.setAttribute('class','in-btn')
div_row7_in2_in.setAttribute('id','equal')
div_row7_in2_in.innerText = '='
div_row7_in2.appendChild(div_row7_in2_in)

div_row7.append(div_row7_in1,div_row7_in2)

div_row8 = document.createElement('div')
div_row8.setAttribute('class','row')
div_row8_in1 = document.createElement('div')
div_row8_in1.setAttribute('class','col-12 output bg-info')
div_row8_in1_in = document.createElement('div')
div_row8_in1_in.setAttribute('class','in-btn text-center')
div_row8_in1_in.setAttribute('id','output')
div_row8_in1_in.innerText = 'OUTPUT'
div_row8_in1.appendChild(div_row8_in1_in)

div_row8.appendChild(div_row8_in1)

maindiv3 = document.createElement('div')
maindiv3.setAttribute('class','col-12')

maindiv3.append(div_row1,break1,div_row2,div_row3,div_row4,break2,div_row5,div_row6,div_row7,div_row8)

maindiv2 = document.createElement('div')
maindiv2.setAttribute('class','row')

maindiv2.appendChild(maindiv3)

maindiv1 = document.createElement('div')
maindiv1.setAttribute('class','container mt-5')

maindiv1.appendChild(maindiv2)

document.body.appendChild(maindiv1)


// MAIN CODE STARTS

var numbers
input = document.getElementById('input')

add = document.getElementById('add')
sub = document.getElementById('sub')
mul = document.getElementById('mul')
div = document.getElementById('div')
mod = document.getElementById('mod')

equal = document.getElementById('equal')

output = document.getElementById('output')

document.onkeydown = function (e) {
    if(e.key == 'F5' || e.key =='Backspace' || e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9')
    {
        add.addEventListener('click' , addi)
        sub.addEventListener('click' , subt)
        mul.addEventListener('click' , mult)
        div.addEventListener('click' , divi)
        mod.addEventListener('click' , modu)
    }
    else{
        alert("type a number")
    }
}


function addi() {
    input.value += '+'
    equal.addEventListener('click' , e => {
        var sum = 0;
        numbers = input.value.split('+')
        console.log(numbers)
        for(let i=0; i <numbers.length; i++)
        sum = sum + parseInt(numbers[i])
        output.innerHTML = sum
        input.value = sum
        console.log(sum)
        
    })
}

function subt() {
    input.value += '-'
    equal.addEventListener('click' , e => {
        
        numbers = input.value.split('-')
        console.log(numbers)
        var tmp = numbers[0]
        for(let i=1; i <numbers.length; i++)  
        tmp = tmp - numbers[i]
        output.innerHTML = tmp
        input.value = tmp
        console.log(tmp)
    })
}

function mult() {
    input.value += '*'
    equal.addEventListener('click' , e => {
        var multi = 1;
        numbers = input.value.split('*')
        console.log(numbers)
        for(let i=0; i <numbers.length; i++)                                                
        multi = multi * parseInt(numbers[i]) 
        output.innerHTML = multi
        input.value = multi
        console.log(multi)
    })
}

function divi() {
    input.value += '/'
    equal.addEventListener('click' , e => {
        var divid = 0;
        numbers = input.value.split('/')
        console.log(numbers)
       // for(let i=0; i <numbers.length; i++)                                                
        divid = parseInt(numbers[0]) / parseInt(numbers[1]) 
        output.innerHTML = divid
        input.value = divid
        console.log(divid)
    })
}

function modu() {
    input.value += '%'
    equal.addEventListener('click' , e => {
        var divid = 0;
        numbers = input.value.split('%')
        console.log(numbers)
       // for(let i=0; i <numbers.length; i++)                                                
        modul = parseInt(numbers[0]) % parseInt(numbers[1]) 
        output.innerHTML = modul
        input.value = modul
        console.log(modul)
    })
}