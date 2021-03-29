import { clear } from 'node:console';
import { type } from 'node:os';
import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);  

    
    const minutes = Math.floor(time /60); //use math para deixar inteiro ex: 1.99 =2.00
    const seconds = time%60 //para ter o resto da divisão ex: 24.59/60 = 59
    
    
    const [minuteLeft, minuteRight] =String(minutes).padStart(2,'0').split('');// pad start add um 0 a esquerda quando minute tem apenas uma casa (padão duas casas)
    const [secondLeft, secondRight] =String(seconds).padStart(2,'0').split('');// split sem parametro divide cada carctere num array
    //ex: 25 = '2' '5'
    //    5  = '0' '5' 
    //essa é a função do padStart e split

    function startCountdown(){
        setIsActive(true);
    };
    
    function resetCountdown(){ 
        clearTimeout(countdownTimeout);//para corrigir o atraso de um segundo quando aperta em abandonar ciclo
        setIsActive(false);
        setTime(0.1*60);
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
        }
       
    },[isActive,time])

    return(
        <div>
            <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
            </div>

            {hasFinished ?(
                <button 
                    disabled 
                    className={styles.countdownButton}    
              
                >
                    Ciclo encerrado!  
                </button>
            ):(
                <>
                    {isActive ?(
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}

                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >

                            iniciar ciclo    
                        </button>
                    )}
                </>
            )}

            
        </div>
    );
}