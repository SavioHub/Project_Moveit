import {Profile} from "../components/profile";
import {ExperienceBar} from "../components/experienceBar";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
      <div className={styles.container}>
        <ExperienceBar/>
        <section>
          <div>
            <Profile/>
          </div>
          <div>

          </div>
        </section>
      </div>
  )
}
