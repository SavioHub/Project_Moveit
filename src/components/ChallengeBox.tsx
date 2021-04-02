import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallendsContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){
    //const activeChallenge=true;
    //se o activeChallenge estiver como nulo, então quer dizer q não tem Chelenge ativo

    const {activeChallenge, resetChallenge, completeChallenge}= useContext(ChallengesContext) 
    const {resetCountdown} = useContext(CountdownContext);
    
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?(
               
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`}/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}

                        >
                            Falhei
                        </button>
                       <button 
                            type="button"
                            className={styles.challengeSuceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
               </div>    
            ):(
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para recer desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        
        </div>
    )
}