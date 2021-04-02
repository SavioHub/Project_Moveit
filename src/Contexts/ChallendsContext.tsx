import {createContext, ReactNode, useState} from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps{
    children: ReactNode;
}

interface Challenge{
    type: string;
    description: string,
    amount: number,
}
interface ChallengesContextData{
    level: number;
    currentExperience: number;
    ChallengesCompleted: number;
    levelUp: () => void;
    experienceToNextLevel: number;         
    startNewChallenges: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: ()=> void;
    
   
}
export const ChallengesContext= createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience]= useState(0);
    const [ChallengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    function levelUp(){        
        setLevel(level+1);
    }


//o Math.Random retorna um numero aleatório de 0 a 1, 
    function startNewChallenges(){
        const randomChallengesIndex= Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex];

        console.log(challenge);

        setActiveChallenge(challenge);
    }
    function resetChallenge(){
        setActiveChallenge(null);
    }
    //função chamada quando o usuario falhar
    
    function completeChallenge(){
        if (!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            console.log(finalExperience);
            levelUp();
        }

        setCurrentExperience(finalExperience);
        // setActiveChallenge(null);
        setChallengesCompleted(ChallengesCompleted+1);
    }
//se não tiver com challenge ativo, dar um return "vazio"
// variavel q recebe o total de experiencia q o usuario vai ficar
// currentExperience= experiencia do usuario + amount= experiencia q o desafio dar

    return(
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                ChallengesCompleted, 
                levelUp,
                startNewChallenges,
                experienceToNextLevel,
                activeChallenge,
                resetChallenge,
                completeChallenge,
            }}
        >

            {children}
        </ChallengesContext.Provider>    
    );
};
