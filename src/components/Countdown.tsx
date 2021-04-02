
import { useContext } from 'react';
import {CountdownContext} from '../Contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){    

    const {
        minutes, 
        seconds, 
        hasFinished, 
        startCountdown, 
        resetCountdown, 
        isActive
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] =String(minutes).padStart(2,'0').split('');// pad start add um 0 a esquerda quando minute tem apenas uma casa (padão duas casas)
    const [secondLeft, secondRight] =String(seconds).padStart(2,'0').split('');// split sem parametro divide cada carctere num array
    //ex: 25 = '2' '5'
    //    5  = '0' '5' 
    //essa é a função do padStart e split

 

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