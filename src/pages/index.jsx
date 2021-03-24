import {Profile} from "../components/profile";
import {ExperienceBar} from "../components/experienceBar";
import styles from "../styles/pages/Home.module.css";
import { CompletedChallends } from "../components/CompletedChallends";
import { Countdown } from "../components/Countdown";

import Head from 'next/head'

export default function Home() {
  return (
     
      <div className={styles.container}>
        <Head>
          <title>Inicio | moveit</title>
        </Head>
        
        <ExperienceBar/>
        <section>
          <div>
            <Profile/>
            <CompletedChallends/>
            <Countdown/>
          </div>
          <div>

          </div>
        </section>
      </div>
  )
}
