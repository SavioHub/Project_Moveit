import styles from '../styles/components/CompletedChallends.module.css';

export function CompletedChallends() {
    return(
        <div className={styles.completedChallendsContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
};