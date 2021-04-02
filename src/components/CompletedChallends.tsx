import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallendsContext';
import styles from '../styles/components/CompletedChallends.module.css';

export function CompletedChallends() {

    const {ChallengesCompleted} =useContext(ChallengesContext);
    return(
        <div className={styles.completedChallendsContainer}>
            <span>Desafios completos</span>
            <span>{ChallengesCompleted}</span>
        </div>
    );
};