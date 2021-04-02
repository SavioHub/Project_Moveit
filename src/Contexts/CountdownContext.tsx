import { 
    createContext,
    ReactNode, 
    useContext, 
    useEffect, 
    useState } 
from "react";

import { ChallengesContext } from "./ChallendsContext";

interface CountdownContextData{
    seconds: number;
    minutes: number;
    isActive: boolean;
    hasFinished: boolean
    startCountdown: ()=> void;
    resetCountdown: ()=> void;
}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){

   
        const {startNewChallenges}= useContext(ChallengesContext)
        console.log('teste3')
    
        const [time, setTime] = useState(0.1 * 60);
        const [isActive, setIsActive] = useState(false);
        const [hasFinished, setHasFinished] = useState(false);  
    
        
        const minutes = Math.floor(time /60); //use math para deixar inteiro ex: 1.99 =2.00
        const seconds = time%60 //para ter o resto da divisão ex: 24.59/60 = 59

        function startCountdown(){
            setIsActive(true);
        };
        
        function resetCountdown(){ 
            clearTimeout(countdownTimeout);//para corrigir o atraso de um segundo quando aperta em abandonar ciclo
            setIsActive(false);
            setTime(0.1*60);
            setHasFinished(true);
        }
        useEffect(()=>{
            if(isActive && time > 0) {
                countdownTimeout= setTimeout(() => {
                    setTime(time -1);
                }, 1000);//setTimeout, para q algo aconteça depois de um tempo
            } 
            else if(isActive && time ==0){
                setHasFinished(true);
                setIsActive(false);//
                startNewChallenges();
            }
           
        },[isActive,time])


    return(
        <CountdownContext.Provider value={{
            isActive,
            startCountdown,
            seconds,
            minutes,
            hasFinished,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
//todo contexto q for criar com typesscript vai seguir essa estrutura 