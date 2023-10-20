/*'Chennai':population = 513456
            literacyRate = 90.20
            language ='Tamil'
   'Bangalore':population = 613456
            literacyRate = 
            language ='Tamil'
    'Mumbai':population = 713456
            literacyRate = 90.20
            language ='Tamil'
    'Delhi':population = 813456
            literacyRate = 90.20
            language ='Tamil'
*/

const button = document.querySelector('button')
button.addEventListener('click',displaystats)
let resultdiv=document.createElement('div') 
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
function displaystats(){
    
    const input = document.getElementById("city")
    const city = input.options[input.selectedIndex].value
    let population = 0
    let literacyrate = 0
    let  language = ''
    switch(city){
        case 'Bangalore':
            population = 981456
            literacyrate = 80.20
            language = 'Kannada'
            break
        
        case 'Chennai':
            population = 912356
            literacyrate = 88.20
            language = 'Kannada'
            break 

        case 'Coimbatore':
            population = 958276
            literacyrate = 90.20
            language = 'Tamil'
            break
                
        case 'Mumbai':
            population = 958256
            literacyrate = 85.20
            language = 'Hindi'
            break
    }
    let text = `The Indian city of ${city}, has a population of ${population}, and language spoken is ${language} and the literaracy rate is ${literacyrate}` 

    document.getElementById('result').innerHTML=text

}