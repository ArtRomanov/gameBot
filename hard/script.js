'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(101);
    let target = Math.floor(Math.random() * (max - min)) + min; 
    console.log(target);
    let i=10;
        
    function two (target){
    
        let question = prompt('Угадай число от 1 до 100');
        
        if (question===null){
            alert('Я слежу за тобой!');
            return false;

        } else if(!isNumber(question)){
            alert('Введи число!');
            two(target);

        } else if(i===1){
            const faltQuestion = confirm('Попытки закончились, хотите сыграть еще?');

            if(faltQuestion){
                getRandomInt();

            }else{
                alert('Я слежу за тобой!');
                return false;
            }

        } else{
            question= +question;
            if(question>target){
                i--;
                alert('Загаданное число меньше, осталось '+i+' попыток');
                two(target);

            } else if(question<target){
                i--;
                alert('Загаданное число больше, осталось '+i+' попыток');
                two(target);

            } else{
                const finalQuestion = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

                if(finalQuestion){
                    getRandomInt();
                    
                }else{
                    return false;
                }
            }
        } 
    }
    two(target);
}
 let num = getRandomInt();