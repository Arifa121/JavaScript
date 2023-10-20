
const button = document.querySelector('button')
button.addEventListener('click',calculate)
let resultdiv=document.createElement('div') 
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)
 function calculate(){   
    let input = (document.getElementById("inputs").value)
    let operatorindex = 0 
    if(input.includes('+')){
        operatorindex = input.indexOf('+')
    }
    else if(input.includes('-')){
        operatorindex = input.indexOf('-')
    }
    else if(input.includes('/')){
        operatorindex = input.indexOf('/')
    }
    else if(input.includes('*')){
        operatorindex = input.indexOf('*')
    }
    let operand1 = Number(input.substring(0,operatorindex))
    let operand2 = Number(input.substring(operatorindex+1))
    let operator = input.charAt(operatorindex)
    let result = 0
    switch(operator){
       case '+':
           result=operand1+operand2
           
           break
       case '-':
           result=operand1-operand2
        
           break
        case '*':
            result=operand1*operand2
           
            break
        case '/':
           if(operand2!=0){
               result=operand1/operand2
           }else{
               result="div by 0 not possible"
           }
            break
        default:
          result="invalid operator"
}
document.getElementById('result').innerHTML=result
 }
