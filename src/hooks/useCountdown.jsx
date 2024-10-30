import { useState } from "react";


const useCountdown = (date) => {

    const [second, setSecond] = useState()
    const [minute, setMinute] = useState()
    const [hour, setHour] = useState()
    const [day, setDay] = useState()


    const countDown = () => {
        const countDate = new Date(date).getTime(); //data em milissegundos que faltam para aquela data setada no index
        const now = new Date().getTime(); //milissegundis para data de agora 

        const interval = countDate - now;

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)


        setDay(dayNumber)
        setHour(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)
    };

    setInterval(countDown, 1000)

    return [day, hour, minute, second];
}

export default useCountdown