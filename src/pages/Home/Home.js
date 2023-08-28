import "./Home.css";
import {useEffect, useState} from "react";

function Homepage(){
    //current greeting index hook
    const [index, setIndex] = useState(0);
    //visibility hook
    const [visible, setVisible] = useState(true);

    //changing greeting text hook
    useEffect(() => {

        const interval = setInterval(() => {
            setVisible(false);

            //smooth visibility changing
            setTimeout(()=>{

                setIndex((index + 1) % GreetingArray.length);

                setVisible(true);

            },250)

        }, 3000);


        return () => {
            clearInterval(interval);
        };
    }, [index]);


    return (
        <div className="Home">
            <span className="Home-Phrase" style={{opacity: visible ? 1 : 0}}>
                {GreetingArray[index]}
            </span>
        </div>
    );
}
//Greeting's phrases
const GreetingArray = [
    'Привет!',
    'Меня зовут Данила Лебедев',
    'Добро пожаловать на моё тестовое задание для Яндекс.Практикум 🙋'
];



export default Homepage