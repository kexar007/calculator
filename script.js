const ops = document.querySelectorAll('.ops');
const digits = document.querySelectorAll('.digits');
const digit= document.querySelectorAll('.digit');
const display = document.querySelector('#display');
let firstnum = 0, secondnum = 0 , opstring = '';
let dispstrng = '';
let a = 0,b = 0;
let operand1 = '', operand2 = '';

digit.forEach((element) => {
    element.addEventListener('click',()=>{
    var delayInMilliseconds = 100; //1 second
    element.style.backgroundColor = 'red';
    setTimeout(function() {
    element.style.backgroundColor = '';
     //your code to be executed after 1 second
    }, delayInMilliseconds);  
    console.log(element.id) 
    update(element);
    opstringwriter(element)    
    })
});
    
ops.forEach((element) => {
    element.addEventListener('click',()=>{
    var delayInMilliseconds = 100; //1 second
    element.style.backgroundColor = 'red';
    setTimeout(function() {
    element.style.backgroundColor = '';
    //your code to be executed after 1 second
    }, delayInMilliseconds);  
    console.log(element.id)  
    update(element);
    operation(element);
    
    





    })
});


function update(item){
    let entered_key = item.id;
    switch (entered_key) {
        case 'AC':
            dispstrng = '';
            display.innerHTML=dispstrng;
            
            break;
    
        default:
            dispstrng = dispstrng+entered_key;
            display.innerHTML=dispstrng;
            if (operand1='') {
                operand1 = entered_key;
                
            }else{
                operand2 = entered_key;
            }
            break;
    } 
}


function opstringwriter(digit){
    opstring +=digit.id;
    console.log('opstring is '+ opstring);
}
function operation(element) {
    
   if (opstring!='' && (a = 0)) {
    a = Number(opstring);
    
    
   } else { 
    if (opstring !='' && (a!= 0)){
        b = Number(opstring)
    }

}
};


    
function add(a,b) {
    return a + b ;
    
}

function sub(a,b) {
    return a - b ;
    
}

function mult(a,b) {
    return a * b ;
    
}

function div(a,b) {
    return a / b ;
    
}

function calc(a,b,op) {
    switch (op) {
        case '+':
            add(a,b)
            break;

        case '-':
            sub(a,b)
        break;

        case '*':
            mult(a,b)
        break;

        case '/':
            div(a,b)
        break;
    }    
}