'use strict'
function one() {
    return function two(hiddenNumber) {
        
        let userNumber = +prompt('Введите число')
        console.log(hiddenNumber)
        let attempts = 10;
        
        if (attempts === 0) {
            alert('Попытки закончились');
        }
        if (userNumber == false) {
            return
        } else if (isNaN(userNumber)) {
            alert('Введите число')
            two(hiddenNumber)

        }
        attempts--;
        
        if (userNumber > hiddenNumber) {
            alert(`Число больше заданного,осталось попыток ${attempts}`) // счетчик не работает :(
            two(hiddenNumber) 

        } else if (userNumber < hiddenNumber) {
            alert(`Число меньше заданного,осталось попыток ${attempts}`)
            two(hiddenNumber)

        } else {
            alert('Победа')
        }


        
    }
    

}
let number = one()
number(Math.floor(Math.random() * 101))
