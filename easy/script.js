'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(101);
    let target = Math.floor(Math.random() * (max - min)) + min; 
    console.log(target);
    
    function two (target){
        let question = prompt('Угадай число от 1 до 100');
        if (question===null){
            return false;
        } else if(!isNumber(question)){
            two(target);
        } else{
            question= +question;
            if(question>target){
                alert('Загаданное число меньше');
                two(target);
            } else if(question<target){
                alert('Загаданное число больше');
                two(target);
            } else{
                alert('Ты угадал!');
            }

        }
    
    console.log(question);
    }
    
    two(target);
}
 let num = getRandomInt();