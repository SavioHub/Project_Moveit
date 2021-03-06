import Head from 'next/head'
import {Profile} from "../components/profile";
import {ExperienceBar} from "../components/experienceBar";
import styles from "../styles/pages/Home.module.css";
import { CompletedChallends } from "../components/CompletedChallends";
import { Countdown } from "../components/Countdown";
import {ChallengeBox} from "../components/ChallengeBox";
import { CountdownProvider } from '../Contexts/CountdownContext';


export default function Home() {
  return (
     
      <div className={styles.container}>
        <Head>
          <title>Inicio | moveit</title>
        </Head>
        
        <ExperienceBar/>

        <CountdownProvider>        
          <section>
            <div>
              <Profile/>
              <CompletedChallends/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
  )
}
