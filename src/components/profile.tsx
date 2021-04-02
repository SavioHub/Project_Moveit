import { useContext } from "react";
import styles from "../styles/components/Profile.module.css"
import { ChallengesContext } from '../Contexts/ChallendsContext'

export function Profile(){
    const { level, levelUp } = useContext(ChallengesContext);

    return(
       <div className={styles.profileContainer}>
           <img src="https://github.com/saviohub.png" alt="Savio git"/>
           <div>
               <strong>Savio Santos</strong>
              <p>
                  <img src="icons/level.svg" alt="Level"/>
                  level {level}
              </p>
           </div>
       </div>
    );
}  