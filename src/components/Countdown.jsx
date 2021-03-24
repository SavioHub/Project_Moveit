import { useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
    const [time, setTime] = useState(25 * 60);
    const minutes = Math.floor(time /60); //use math para deixar inteiro ex: 1.99 =2.00
    const seconds = time%60 //para ter o resto da divisão ex: 24.59/60 = 59
    
    
    return(
        <div>
            <div className={styles.countdownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
            </div>

            <button type="button" className={styles.countdownButton}>
            iniciar um ciclo
            </button>
        </div>
  );
};