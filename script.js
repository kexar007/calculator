const ops = document.querySelectorAll('.ops');
const digits = document.querySelectorAll('.digits');
const digit= document.querySelectorAll('.digit');
const display = document.querySelector('#display');
var opstring = '';
let firstop = '' , secondop = 'empty' , num1= 0; num2 = 0 ;
let opswitch = false;


digit.forEach((element) => {
    element.addEventListener('click',()=>{
  
        var delayInMilliseconds = 100; //1 second
    element.style.backgroundColor = 'red';
    setTimeout(function() {
    element.style.backgroundColor = '';
     //your code to be executed after 1 second
    }, delayInMilliseconds);  



    console.log(element.id) 
    if(element.id==='.' && opstring.includes('.')) return;
    opstringwriter(element);
    console.log("opstring is "+opstring)    
    update(element);
   
    })
});
    
ops.forEach((element) => {
    element.addEventListener('click',()=>{

    console.log('1.element id is '+element.id);
    

    console.log('2.element id is '+element.id)  
    
    if(element.id==='AC'){reset()};
    if(element.id==='AC')return;

    if(opswitch){
        secondop=element.id;
        operator(element);
        update(element);
        

    }
    if(!opswitch){
        

        console.log(opswitch)
        firstop = element.id;
        num1 = Number(opstring);
        console.log("num1 is now "+num1)
        opstring = '';
        update(element);
    }

    opswitch = !opswitch;
    
    
    //operation(element);
    
    var delayInMilliseconds = 100; //1 second
    element.style.backgroundColor = 'red';
    setTimeout(function() {
    element.style.backgroundColor = '';
    //your code to be executed after 1 second
    }, delayInMilliseconds);  





    })
});



    
function add(a,b) {
    return a + b ;
    
}

function sub(a,b) {
    return a - b ;
    
}

function mult(a,b) {
    return a*b ;
    
}

function div(a,b) {
    return a / b ;
    
}

function calc(a,b,op) {
    console.log("op is "+op)
    switch (op) {
        case '+':
            console.log("add")
           return add(a,b)
           
            break;

        case '-':
           return sub(a,b)
        break;

        case 'x':
            return mult(a,b)
        break;

        case '/':
            return  div(a,b)
        break;
    }    
}





function update(element){
    if(element.id==="AC"){
        reset()
        return
    }else{
        if((element.id==="=")){
            operator(element)
            return
        }else{
            display.innerText += element.id;
        }

    }
    

}


function reset(){
    display.innerText="";
    opstring ='';
    opswitch = false;
    firstop = '' , secondop = 'empty' , num1= 0; num2 = 0 ;
    return
}

function opstringwriter(element){
    if(element.id==='=')return;
    opstring+= element.id;
}

function operator(element){
    console.log("operator start");
    if(firstop==='')return;
    num2=Number(opstring);
    console.log("num1 is "+num1+" num2 is "+num2 + "  opstring: "+opstring)
    num2=Number(opstring);
    if(element.id==='='){
        
       display.innerText= Number(calc(num1,num2,firstop))
       console.log("firstop is "+firstop)
       opstring = display.innerText;
    }
    if (secondop !='empty'){
        display.innerText= Number(calc(num1,num2,firstop))
        opstring = display.innerText;
        firstop= secondop;
        secondop ='empty';
        opswitch=!opswitch;

    }


}